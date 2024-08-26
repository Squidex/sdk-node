import { getClient, guid } from "./_utils";

describe("User management", () => {
    const { client } = getClient();

    it("should create and fetch user", async () => {
        const email = `user${guid()}@email.com`;

        const createdUser = await client.userManagement.postUser({
            email,
            displayName: "Jane Smith",
            password: "1q2w3e$R",
            permissions: [],
        });

        const user = await client.userManagement.getUser(createdUser.id);
        expect(user.email).toEqual(email);
        expect(user.displayName).toEqual("Jane Smith");
    });
});
