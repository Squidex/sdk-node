import { SchemaDto } from "../src";
import { getClient, guid } from "./_utils";

const { client } = getClient();

let createdSchema: SchemaDto;

beforeAll(async () => {
    createdSchema = await client.schemas.postSchema({
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
});

describe("Contents", () => {
    it("should create and fetch content", async () => {
        const value = guid();

        const createdContent = await client.contents.postContent(
            createdSchema.name,
            {
                field1: {
                    iv: value,
                },
            },
            {
                publish: true,
            },
        );

        const content = await client.contents.getContent(createdSchema.name, createdContent.id);
        expect(content.data).toEqual({ field1: { iv: value } });
        expect(content.lastModified).toBeDefined();
        expect(content.lastModifiedBy).toBeDefined();
        expect(content.status).toEqual("Published");
    });

    it("should create and fetch unpublished content", async () => {
        const value = guid();

        const createdContent = await client.contents.postContent(createdSchema.name, {
            field1: {
                iv: value,
            },
        });

        const content = await client.contents.getContent(createdSchema.name, createdContent.id, { unpublished: true });
        expect(content.data).toEqual({ field1: { iv: value } });
        expect(content.lastModified).toBeDefined();
        expect(content.lastModifiedBy).toBeDefined();
        expect(content.status).toEqual("Draft");
    });
});
