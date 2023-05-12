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
    }
}

export class SquidexClient extends FernClient {
    private token: string | undefined;

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
            token: async () => {
                if (this.token == null) {
                    const response = await core.fetcher({
                        url: urlJoin(
                            this.options.environment ?? environments.SquidexEnvironment.Default,
                            "/identity-server/connect/token"
                        ),
                        contentType: "application/x-www-form-urlencoded",
                        method: "POST",
                        body: new URLSearchParams({
                            grant_type: "client_credentials",
                            client_id: clientOptions.clientId,
                            client_secret: clientOptions.clientSecret,
                            scope: "squidex-api",
                        }),
                    });
                    if (response.ok) {
                        const accessToken = (response.body as any)?.["access_token"];
                        if (typeof accessToken !== "string") {
                            throw new errors.SquidexError({
                                message: "Token is not a string",
                            });
                        }
                        this.token = accessToken;
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
                }
                if (this.token == null) {
                    throw new errors.SquidexError({
                        message: "Token is null despite trying to fetch",
                    });
                }
                return this.token;
            },
        });
    }
}
