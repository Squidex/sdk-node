import { SquidexClient as FernClient } from "../Client";
import * as environments from "../environments";
import * as core from "../core";
import * as errors from "../errors";
import urlJoin from "url-join";

export declare namespace SquidexClient {
    interface Options {
        /**
         * The name of the app.
         */
        appName: string;
        /**
         * The secret of the client.
         */
        clientId: string;
        /**
         * The secret of the client.
         */
        clientSecret: string;
        /**
         * Custom headers to be added to each request.
         */
        customHeader?: Record<string, string>;
        /**
         * The URL to your Squidex installation (cloud by default).
         */
        environment?: environments.SquidexEnvironment | string;
        /**
         * A custom fetcher for normal requests.
         */
        fetcher?: core.FetchFunction;
        /**
         * A function to create a new fetcher based on the default fetcher.
         */
        fetcherInterceptor?: (next: core.FetchFunction) => core.FetchFunction;
        /**
         * A custom fetcher for streaming requests.
         */
        streamingFetcher?: core.StreamingFetchFunction;
        /**
         * A function to create a new stream fetcher based on the default fetcher.
         */
        streamingFetcherInterceptor?: (next: core.StreamingFetchFunction) => core.StreamingFetchFunction;
        /**
         * The timeout in milliseconds.
         */
        timeout?: number;
        /**
         * The store for tokens. By default it is in memory.
         */
        tokenStore?: TokenStore;
    }
    
    export interface TokenStore {
        get(): Token | undefined;

        set(token: Token): void;

        clear(): void;
    }

    export interface Token {
        accessToken: string;
        expiresIn: number;
        expiresAt: number;
    }
}

export class SquidexClient extends FernClient {
    private tokenPromise?: Promise<string>;
    private tokenStore?: SquidexClient.TokenStore;

    /**
     * The current app name.
     */
    public get appName() {
        return this.options.appName;
    }

    /**
     * The current client ID.
     */
    public get clientId() {
        return this.clientOptions.clientId;
    }
    
    /**
     * The current client secret.
     */
    public get clientSecret() {
        return this.clientOptions.clientSecret;
    }
    
    /**
     * The current URL to the Squidex installation.
     */
    public get environment() {
        return this.clientOptions.environment || environments.SquidexEnvironment.Default;
    }
    
    private get actualTokenStore() {
        return this.tokenStore ||= (this.clientOptions.tokenStore || new SquidexClient.InMemoryTokenStore());
    }

    constructor(readonly clientOptions: SquidexClient.Options) {
        super({
            appName: clientOptions.appName,
            token: () => {
                return this.getToken();
            },
            environment: clientOptions.environment,
            fetcher: async args => {
                let fetcher = clientOptions.fetcher ?? core.fetcher;

                // Allow custom fetcher function.
                fetcher = clientOptions.fetcherInterceptor?.(fetcher) ?? fetcher;

                addOptions(args, clientOptions);
                try {
                    return await fetcher(args);
                } catch (ex) {
                    const error = ex as core.Fetcher.Error;

                    // Token has probably been expired.
                    if (error.reason === 'status-code' && error.statusCode === 401) {
                        this.clearToken();
                        return await fetcher(args);
                    }

                    throw ex;
                }
            },
            streamingFetcher: async args => {
                let fetcher = clientOptions.streamingFetcher ?? core.streamingFetcher;

                // Allow custom fetcher function.
                fetcher = clientOptions.streamingFetcherInterceptor?.(fetcher) ?? fetcher;

                addOptions(args, clientOptions);
                try {
                    return fetcher(args);
                } catch (ex) {
                    const error = ex as core.Fetcher.Error;

                    // Token has probably been expired.
                    if (error.reason === 'status-code' && error.statusCode === 401) {
                        this.clearToken();
                        return fetcher(args);
                    }

                    throw ex;
                }
            }
        });
    }

    /**
     * Clears the current token in case it has been expired.
     */
    clearToken() {
        this.actualTokenStore.clear();
    }

    private async getToken() {
        const promise = (this.tokenPromise ||= (async () => {
            const now = new Date().getTime();
            try {
                let token = this.actualTokenStore.get();

                if (token != null && token.expiresAt > now) {
                    return token.accessToken;
                }

                const response = await core.fetcher({
                    url: urlJoin(
                        this.clientOptions.environment ?? environments.SquidexEnvironment.Default,
                        "/identity-server/connect/token"
                    ),
                    contentType: "application/x-www-form-urlencoded",
                    body: new URLSearchParams({
                        grant_type: "client_credentials",
                        client_id: this.clientOptions.clientId,
                        client_secret: this.clientOptions.clientSecret,
                        scope: "squidex-api",
                    }),
                    method: "POST",
                });
                
                if (response.ok) {
                    const accessToken = (response.body as any)?.["access_token"];
                    if (typeof accessToken !== "string") {
                        throw new errors.SquidexError({
                            message: "Token is not a string",
                        });
                    }

                    const expiresIn: number = (response.body as any)?.["expires_in"];
                    if (typeof expiresIn !== "number") {
                        throw new errors.SquidexError({
                            message: "Token has no valid expiration",
                        });
                    }
                    
                    token = { 
                        accessToken,
                        expiresIn,
                        expiresAt: now + expiresIn
                    };
                } else {
                    switch (response.error.reason) {
                        case "non-json":
                            throw new errors.SquidexError({
                                message: 'Token request does not return a valid JSON object.',
                                statusCode: response.error.statusCode,
                                body: response.error.rawBody,
                            });
                        case "status-code":
                            throw new errors.SquidexError({
                                message: `Token request returns invalid status code: ${response.error.statusCode}.`,
                                statusCode: response.error.statusCode,
                                body: response.error['body'],
                            });
                        case "unknown":
                            throw new errors.SquidexError({
                                message: response.error.errorMessage,
                            });
                        case "timeout":
                            throw new errors.SquidexTimeoutError();
                    }
                }

                this.actualTokenStore.set(token);

                if (token == null) {
                    throw new errors.SquidexError({
                        message: "Token is null despite trying to fetch",
                    });
                }

                return token.accessToken;
            } finally {
                this.tokenPromise = undefined;
            }
        })());

        return promise;
    };
}

function addOptions(args: core.Fetcher.Args | core.StreamingFetcher.Args, clientOptions: SquidexClient.Options) {
    if (clientOptions.timeout) {
        args.timeoutMs = clientOptions.timeout;
    }

    if (clientOptions.customHeader) {
        args.headers ??= {};
        for (const [key, value] of Object.entries(clientOptions.customHeader)) {
            args.headers[key] = value;
        }
    }
}

export namespace SquidexClient {
    export class InMemoryTokenStore implements TokenStore {
        private token: Token | undefined;
    
        get(): Token | undefined {
            return this.token;
        }
    
        set(token: Token): void {
            this.token = token;
        }
    
        clear() {
            this.token = undefined;
        }
    }

    export class StorageTokenStore implements TokenStore {
        constructor(readonly store: Storage = localStorage, readonly key = 'SquidexToken') {
        }
    
        get(): Token | undefined {
            const value = this.store.getItem(this.key);
    
            if (!value) {
                return undefined;
            }
    
            return JSON.parse(value);
        }
    
        set(token: Token): void {
            this.store.setItem(this.key, JSON.stringify(token));
        }
    
        clear() {
            this.store.removeItem(this.key);
        }
    }
}