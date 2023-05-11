import { getClient, guid } from "./_utils";

describe("User management", () => {
    it("create user and load user", async () => {
        const { client } = await getClient();

        const email = `user${guid()}@email.com`;

        const createdUser = await client.userManagement.postUser({
            email,
            displayName: "Jane Smith",
            password: "1234",
            permissions: [],
        });

        const user = await client.userManagement.getUser(createdUser.id!);
        expect(user.email).toBe(email);
        expect(user.displayName).toBe("Jane Smith");
        expect(user.permissions).toEqual([]);
    });
});
