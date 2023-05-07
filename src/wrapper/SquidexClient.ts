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
    }
}

export class SquidexClient extends FernClient {
    private token: string | undefined;

    constructor(options: SquidexClient.Options) {
        super({
            environment: options.environment,
            token: async () => {
                if (this.token == null) {
                    const response = await core.fetcher({
                        url: urlJoin(
                            this.options.environment ?? environments.SquidexEnvironment.Default,
                            "/identity-server/connect/token"
                        ),
                        contentType: "application/x-www-form-urlencoded",
                        method: "POST",
                        body: {
                            grant_type: "client_credentials",
                            client_id: options.clientId,
                            client_secret: options.clientSecret,
                            scope: "squidex-api",
                        },
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
                                    statusCode: response.error.statusCode,
                                    body: response.error.rawBody,
                                });
                            case "timeout":
                                throw new errors.SquidexTimeoutError();
                            case "unknown":
                                throw new errors.SquidexError({
                                    message: response.error.errorMessage,
                                });
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
