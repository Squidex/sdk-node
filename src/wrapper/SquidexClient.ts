import { SquidexClient as FernClient } from "../Client";
import * as environments from "../environments";
import * as core from "../core";
import * as errors from "../errors";
import urlJoin from "url-join";

export declare namespace SquidexClient {
    interface Options {
        clientId: string;
        clientSecret: string;
        environment?: environments.SquidexEnvironment | string;
        appName: string;
        tokenStore?: TokenStore;
    }
    
    export interface TokenStore {
        get(): string | undefined;

        set(token: string): void;
    }
}


export class SquidexInMemoryTokenStore implements SquidexClient.TokenStore {
    private token: string | undefined;

    get(): string | undefined {
        return this.token;
    }

    set(token: string): void {
        this.token = token;
    }
}

export class SquidexStorageTokenStore implements SquidexClient.TokenStore {
    constructor(readonly store: Storage = localStorage, readonly key = 'SquidexToken') {
    }

    get(): string | undefined {
        return this.store.getItem(this.key) || undefined;
    }

    set(token: string): void {
        this.store.setItem(this.key, token);
    }
}

export class SquidexClient extends FernClient {
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
    
    constructor(readonly clientOptions: SquidexClient.Options) {
        super({
            environment: clientOptions.environment,
            appName: clientOptions.appName,
            token: buildTokenResolver(clientOptions)
        });
    }
}

function buildTokenResolver(options: SquidexClient.Options) {
    const store = options.tokenStore || new SquidexInMemoryTokenStore();
    
    const cachedPromise: {
        promise?: Promise<string>
    } = {};

    return () => {
        const promise = (cachedPromise.promise ||= (async () => {
            try {
                let token = store.get();

                if (token != null) {
                    return token;
                }

                const response = await core.fetcher({
                    url: urlJoin(
                        options.environment ?? environments.SquidexEnvironment.Default,
                        "/identity-server/connect/token"
                    ),
                    contentType: "application/x-www-form-urlencoded",
                    body: new URLSearchParams({
                        grant_type: "client_credentials",
                        client_id: options.clientId,
                        client_secret: options.clientSecret,
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
                    token = accessToken;
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

                store.set(token);

                if (token == null) {
                    throw new errors.SquidexError({
                        message: "Token is null despite trying to fetch",
                    });
                }

                return token;
            } finally {
                cachedPromise.promise = undefined;
            }
        })());

        return promise;
    }
}