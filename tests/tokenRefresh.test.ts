import { SquidexClient } from "../src";

describe("Token refresh", () => {
    it("shares a token request between concurrent API requests", async () => {
        let tokenRequests = 0;
        let resolveTokenRequest: (response: Response) => void;

        const tokenResponse = new Promise<Response>((resolve) => {
            resolveTokenRequest = resolve;
        });

        const client = new SquidexClient({
            appName: "my-app",
            clientId: "client-id",
            clientSecret: "client-secret",
            url: "https://squidex.example",
            fetcher: async (input) => {
                if (input.toString().endsWith("/identity-server/connect/token")) {
                    tokenRequests++;
                    return tokenResponse;
                }

                return new Response(JSON.stringify([]));
            },
        });

        const requests = [
            client.languages.getLanguages(),
            client.languages.getLanguages(),
            client.languages.getLanguages(),
        ];

        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(tokenRequests).toBe(1);

        resolveTokenRequest!(new Response(JSON.stringify({ access_token: "token-1", expires_in: 60_000 })));

        await Promise.all(requests);
    });

    it("refreshes a cached token after a 401", async () => {
        let tokenRequests = 0;
        let rejectFirstToken = false;
        let firstTokenRejected = false;

        const client = new SquidexClient({
            appName: "my-app",
            clientId: "client-id",
            clientSecret: "client-secret",
            url: "https://squidex.example",
            fetcher: async (input, init) => {
                const url = input.toString();
                const headers = new Headers(init?.headers);

                if (url.endsWith("/identity-server/connect/token")) {
                    tokenRequests++;

                    return new Response(JSON.stringify({ access_token: `token-${tokenRequests}`, expires_in: 60_000 }));
                }

                const authorization = headers.get("Authorization");

                if (rejectFirstToken && authorization === "Bearer token-1") {
                    firstTokenRejected = true;
                    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
                }

                return new Response(JSON.stringify([]));
            },
        });

        await client.languages.getLanguages();

        rejectFirstToken = true;
        await client.languages.getLanguages();

        expect(tokenRequests).toBe(2);
        expect(firstTokenRejected).toBe(true);
    });
});
