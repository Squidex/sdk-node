import { SquidexClient } from "../wrapper/SquidexClient";

describe("User management", () => {
    it("create user and load user", async () => {
        const client = new SquidexClient({
            clientId: getEnvironmentVariableOrThrow("SQUIDEX_CLIENT_ID"),
            clientSecret: getEnvironmentVariableOrThrow("SQUIDEX_CLIENT_SECRET"),
            environment: "http://localhost:8080",
        });

        const createUserResponse = await client.userManagement.postUser({
            email: "foo@email.com",
            displayName: "Jane Smith",
            password: "password123",
            permissions: [],
        });

        if (createUserResponse.id == null) {
            throw new Error("Created user doesn't have an ID.");
        }

        const user = await client.userManagement.getUser(createUserResponse.id);
        expect(user.email).toBe("foo@email.com");
        expect(user.displayName).toBe("Jane Smith");
        expect(user.permissions).toEqual([]);
    });
});

function getEnvironmentVariableOrThrow(name: string): string {
    const value = process.env[name];
    if (value == null) {
        throw new Error(`${name} does not exist in the current environment`);
    }
    return value;
}
