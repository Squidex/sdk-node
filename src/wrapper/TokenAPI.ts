import { BaseAPI, Configuration } from "../generated";
import { SquidexOptions, TokenStore } from "./SquidexClient";
import { SquidexUnauthorizedError } from "./errors";

export class TokenAPI extends BaseAPI {
    private tokenPromise?: Promise<string>;

    constructor(
        private readonly tokenStore: TokenStore,
        private readonly clientOptions: SquidexOptions,
        configuration: Configuration,
    ) {
        super(configuration);
    }

    public async getToken() {
        const promise = (this.tokenPromise ||= (async () => {
            const now = new Date().getTime();
            try {
                let token = this.tokenStore.get();

                if (token != null && token.expiresAt > now) {
                    return token.accessToken;
                }

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

                token = {
                    accessToken: body.access_token,
                    expiresIn,
                    expiresAt: now + expiresIn,
                };

                this.tokenStore.set(token);

                return token.accessToken;
            } finally {
                this.tokenPromise = undefined;
            }
        })());

        return promise;
    }
}
