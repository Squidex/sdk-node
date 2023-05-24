import { SquidexClient as FernClient } from "../Client";
import * as environments from "../environments";
import * as core from "../core";
import * as errors from "../errors";
import urlJoin from "url-join";

export declare namespace SquidexClient {
    interface Options {
        appName: string;
        clientId: string;
        clientSecret: string;
        customHeader?: Record<string, string>;
        environment?: environments.SquidexEnvironment | string;
        fetcher?: core.FetchFunction;
        fetcherInterceptor?: (next: core.FetchFunction) => core.FetchFunction;
        streamingFetcher?: core.StreamingFetchFunction;
        streamingFetcherInterceptor?: (next: core.StreamingFetchFunction) => core.StreamingFetchFunction;
        timeout?: number;
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

    public get appName() {
        return this.options.appName;
    }

    public get clientId() {
        return this.clientOptions.clientId;
    }
    
    public get clientSecret() {
        return this.clientOptions.clientSecret;
    }
    
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
                let actual = clientOptions.fetcher ?? core.fetcher;

                if (clientOptions.fetcherInterceptor) {
                    actual = clientOptions.fetcherInterceptor(actual) ?? actual;
                }

                if (clientOptions.timeout) {
                    args.timeoutMs = clientOptions.timeout;
                }

                if (clientOptions.customHeader) {
                    args.headers ??= {};
                    for (const [key, value] of Object.entries(clientOptions.customHeader)) {
                        args.headers[key] = value;
                    }
                }

                try {
                    return await actual(args as any) as any;
                } catch (ex) {
                    const error = ex as core.Fetcher.Error;

                    // Token has probably been expired.
                    if (error.reason === 'status-code' && error.statusCode === 401) {
                        this.clearToken();
                        return await actual(args as any);
                    }

                    throw ex;
                }
            },
            streamingFetcher: async args => {
                let actual = clientOptions.streamingFetcher ?? core.streamingFetcher;

                if (clientOptions.streamingFetcherInterceptor) {
                    actual = clientOptions.streamingFetcherInterceptor(actual) ?? actual;
                }

                if (clientOptions.timeout) {
                    args.timeoutMs = clientOptions.timeout;
                }

                if (clientOptions.customHeader) {
                    args.headers ??= {};
                    for (const [key, value] of Object.entries(clientOptions.customHeader)) {
                        args.headers[key] = value;
                    }
                }

                try {
                    return actual(args);
                } catch (ex) {
                    const error = ex as core.Fetcher.Error;

                    // Token has probably been expired.
                    if (error.reason === 'status-code' && error.statusCode === 401) {
                        this.clearToken();
                        return actual(args);
                    }

                    throw ex;
                }
            }
        });
    }

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