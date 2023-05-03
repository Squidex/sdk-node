import { SquidexClient } from "@squidex/squidex";
import { clientWithDefaultApp, guid } from "./_utils";

describe('Schemas', () => {
    let client: SquidexClient;

    beforeAll(async () => {
        client = await clientWithDefaultApp();
    });

    it('should create schema', async () => {
        const schemaId = `schema-${guid()}`;
        const schema = await client.
    })
});