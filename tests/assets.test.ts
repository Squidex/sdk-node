import fs from 'fs';
import { getClient, guid } from "./_utils";

describe("Assets", () => {
    it("upload and fetch asset", async () => {
        const { client } = await getClient();
        const fileStream = fs.createReadStream('tests/assets/logo-wide.png');
        const fileInfo = fs.statSync('tests/assets/logo-wide.png');

        const createdAsset = await client.assets.postAsset(fileStream);

        const asset = await client.assets.getAsset(createdAsset.id!);
        expect(asset.id).toEqual(createdAsset.id);
        expect(asset.fileName).toEqual("logo-wide.png");
        expect(asset.fileSize).toEqual(fileInfo.size);
        expect(asset.mimeType).toEqual('image/png');
    });
});
