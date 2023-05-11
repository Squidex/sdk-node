import { getClient, guid } from "./_utils";

describe("User management", () => {
    xit("create user and load user", async () => {
        const { client } = await getClient();
        const email = `user${guid()}@email.com`;

        const createdUser = await client.userManagement.postUser({
            email,
            displayName: "Jane Smith",
            password: "1q2w3e$R",
            permissions: [],
        });

        const user = await client.userManagement.getUser(createdUser.id!);
        expect(user.email).toEqual(email);
        expect(user.displayName).toEqual("Jane Smith");
        expect(user.permissions).toEqual([]);
    });
});
