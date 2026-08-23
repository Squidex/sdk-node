import { SquidexClient } from "../src";

describe("Token refresh", () => {
    it("shares a token request between concurrent API requests", async () => {
        let tokenRequestCount = 0;
        let resolveTokenRequestStarted: () => void;
        let resolvePendingTokenResponse: (response: Response) => void;

        const tokenRequestStarted = new Promise<void>((resolve) => {
            resolveTokenRequestStarted = resolve;
        });

        const pendingTokenResponse = new Promise<Response>((resolve) => {
            resolvePendingTokenResponse = resolve;
        });

        const client = new SquidexClient({
            appName: "my-app",
            clientId: "client-id",
            clientSecret: "client-secret",
            url: "https://squidex.example",
            fetcher: async (input) => {
                if (input.toString().endsWith("/identity-server/connect/token")) {
                    tokenRequestCount++;

                    if (tokenRequestCount === 1) {
                        resolveTokenRequestStarted!();
                    }

                    return pendingTokenResponse;
                }

                return new Response(JSON.stringify([]));
            },
        });

        const concurrentApiRequests = [
            client.languages.getLanguages(),
            client.languages.getLanguages(),
            client.languages.getLanguages(),
        ];

        await tokenRequestStarted;

        expect(tokenRequestCount).toBe(1);

        resolvePendingTokenResponse!(new Response(JSON.stringify({ access_token: "token-1", expires_in: 60_000 })));

        await Promise.all(concurrentApiRequests);
    });

    it("does not discard a refreshed token after a delayed 401 response", async () => {
        let tokenRequestCount = 0;
        const tokenOneResponseResolvers: Array<(response: Response) => void> = [];
        let resolveInitialApiRequestsReceived: () => void;

        const initialApiRequestsReceived = new Promise<void>((resolve) => {
            resolveInitialApiRequestsReceived = resolve;
        });

        const client = new SquidexClient({
            appName: "my-app",
            clientId: "client-id",
            clientSecret: "client-secret",
            url: "https://squidex.example",
            fetcher: async (input, init) => {
                if (input.toString().endsWith("/identity-server/connect/token")) {
                    tokenRequestCount++;
                    return new Response(
                        JSON.stringify({ access_token: `token-${tokenRequestCount}`, expires_in: 60_000 }),
                    );
                }

                if (new Headers(init?.headers).get("Authorization") === "Bearer token-1") {
                    return new Promise<Response>((resolve) => {
                        tokenOneResponseResolvers.push(resolve);

                        if (tokenOneResponseResolvers.length === 2) {
                            resolveInitialApiRequestsReceived!();
                        }
                    });
                }

                return new Response(JSON.stringify([]));
            },
        });

        const firstApiRequest = client.languages.getLanguages();
        const secondApiRequest = client.languages.getLanguages();

        await initialApiRequestsReceived;

        tokenOneResponseResolvers[0](new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 }));
        await firstApiRequest;

        tokenOneResponseResolvers[1](new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 }));
        await secondApiRequest;

        expect(tokenRequestCount).toBe(2);
    });

    it("refreshes a cached token after a 401", async () => {
        let tokenRequestCount = 0;
        let rejectTokenOne = false;
        let tokenOneWasRejected = false;

        const client = new SquidexClient({
            appName: "my-app",
            clientId: "client-id",
            clientSecret: "client-secret",
            url: "https://squidex.example",
            fetcher: async (input, init) => {
                const url = input.toString();
                const headers = new Headers(init?.headers);

                if (url.endsWith("/identity-server/connect/token")) {
                    tokenRequestCount++;

                    return new Response(
                        JSON.stringify({ access_token: `token-${tokenRequestCount}`, expires_in: 60_000 }),
                    );
                }

                const authorization = headers.get("Authorization");

                if (rejectTokenOne && authorization === "Bearer token-1") {
                    tokenOneWasRejected = true;
                    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
                }

                return new Response(JSON.stringify([]));
            },
        });

        await client.languages.getLanguages();

        rejectTokenOne = true;
        await client.languages.getLanguages();

        expect(tokenRequestCount).toBe(2);
        expect(tokenOneWasRejected).toBe(true);
    });
});
