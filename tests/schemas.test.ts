import { getClient, guid } from "./_utils";

const { client } = getClient();

describe("Schemas", () => {
    it("should create and fetch schema", async () => {
        const createdSchema = await client.schemas.postSchema({
            name: `schema-${guid()}`,
            fields: [
                {
                    name: "field1",
                    properties: {
                        fieldType: "String",
                    },
                },
            ],
            isPublished: true,
        });

        const schema = await client.schemas.getSchema(createdSchema.id);
        expect(schema.name).toEqual(createdSchema.name);
        expect(schema.fields.length).toEqual(1);
        expect(schema.fields[0].properties.fieldType).toEqual("String");
        expect(schema.type).toBe("Default");
        expect(schema.isPublished).toBeTruthy();
    });
});
