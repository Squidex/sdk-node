import fs from 'fs';
import os from 'os';
import path from 'path';
import { getClient, guid } from "./_utils";

describe("Assets", () => {
    const { client } = getClient();

    it("upload and fetch asset", async () => {
        const fileStream = fs.createReadStream('tests/assets/logo-wide.png');
        const fileInfo = fs.statSync('tests/assets/logo-wide.png');

        const createdAsset = await client.assets.postAsset(fileStream);

        const asset = await client.assets.getAsset(createdAsset.id!);
        expect(asset.id).toEqual(createdAsset.id);
        expect(asset.fileName).toEqual("logo-wide.png");
        expect(asset.fileSize).toEqual(fileInfo.size);
        expect(asset.mimeType).toEqual('image/png');
    });

    it("upload and download asset", async () => {
        const fileStream = fs.createReadStream('tests/assets/logo-wide.png');
        const fileInfo = fs.statSync('tests/assets/logo-wide.png');

        const createdAsset = await client.assets.postAsset(fileStream);

        const asset = await client.assets.getAssetContent(createdAsset.id!);
        const tempDir = os.tmpdir();
        const tempFile = path.join(tempDir, guid());
        const tempStream = fs.createWriteStream(tempFile);

        await new Promise((resolve, reject) => {
            asset.on('end', resolve);
            asset.pipe(tempStream);
        });

        const downloadedFile = fs.statSync(tempFile);
        
        expect(downloadedFile.size).toEqual(fileInfo.size);
    });
});
