import { SquidexClient } from "../../dist";
import { clientWithDefaultApp, guid } from "./_utils";

describe('Schemas', () => {
    let client: SquidexClient;

    beforeAll(async () => {
        client = await clientWithDefaultApp();
    });

    it('should create schema', async () => {
        const schemaId = `schema-${guid()}`;
        const schema = await client.schemas.create({ name: schemaId });

        // Should not return void.
        // expect(schema.name).toBe(schemaId);
    })
});