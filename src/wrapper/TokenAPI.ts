import { BaseAPI, Configuration } from "../generated";
import { SquidexOptions } from "./SquidexClient";
import { Token } from "./Token";
import { SquidexUnauthorizedError } from "./errors";

export class TokenAPI extends BaseAPI {
    private tokenPromise?: Promise<Token>;

    constructor(
        private readonly clientOptions: SquidexOptions,
        configuration: Configuration,
    ) {
        super(configuration);
    }

    public async getToken() {
        const now = new Date().getTime();

        const promise = (this.tokenPromise ||= (async () => {
            try {
                const response = await this.request({
                    path: "/identity-server/connect/token",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-AuthRequest": "1",
                        "X-AuthSource": "Client",
                    },
                    body: new URLSearchParams({
                        grant_type: "client_credentials",
                        client_id: this.clientOptions.clientId,
                        client_secret: this.clientOptions.clientSecret,
                        scope: "squidex-api",
                    }),
                    method: "POST",
                });

                const body = (await response.json()) as { access_token: string; expires_in: number };

                if (typeof body.access_token !== "string") {
                    throw new SquidexUnauthorizedError(undefined, undefined, "Token is not a string");
                }

                if (typeof body.expires_in !== "number") {
                    throw new SquidexUnauthorizedError(undefined, undefined, "Token has no valid expiration");
                }

                const expiresIn = body.expires_in;

                const token = {
                    accessToken: body.access_token,
                    expiresIn,
                    expiresAt: now + expiresIn,
                };

                return token;
            } finally {
                this.tokenPromise = undefined;
            }
        })());

        return promise;
    }
}
