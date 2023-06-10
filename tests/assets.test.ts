import fs from "fs";
import os from "os";
import path from "path";
import * as StreamPromises from "stream/promises";
import { getClient, guid } from "./_utils";

describe("Assets", () => {
    const { client } = getClient();

    it("should upload and fetch asset", async () => {
        const fileStream = fs.createReadStream("tests/assets/logo-wide.png");
        const fileInfo = fs.statSync("tests/assets/logo-wide.png");

        const createdAsset = await client.assets.postAsset(fileStream);

        const asset = await client.assets.getAsset(createdAsset.id);
        expect(asset.id).toEqual(createdAsset.id);
        expect(asset.fileName).toEqual("logo-wide.png");
        expect(asset.fileSize).toEqual(fileInfo.size);
        expect(asset.mimeType).toEqual("image/png");
    });

    it("should upload and download asset", async () => {
        const fileStream = fs.createReadStream("tests/assets/logo-wide.png");
        const fileInfo = fs.statSync("tests/assets/logo-wide.png");

        const createdAsset = await client.assets.postAsset(fileStream);

        const asset = await client.assets.getAssetContent(createdAsset.id);
        const tempFolder = os.tmpdir();
        const tempFile = path.join(tempFolder, guid());
        const tempStream = fs.createWriteStream(tempFile);
        await StreamPromises.pipeline(asset.data, tempStream);

        const downloadedFile = fs.statSync(tempFile);
        
        expect(asset.contentType).toEqual('image/png');
        expect(asset.contentLengthInBytes).toEqual(fileInfo.size);
        expect(downloadedFile.size).toEqual(fileInfo.size);
    });
});
