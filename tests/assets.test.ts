import fs from "fs/promises";
import { getClient } from "./_utils";

describe("Assets", () => {
    const { client } = getClient();

    it("should upload and fetch asset", async () => {
        const fileStream = await fs.readFile("tests/assets/logo-wide.png");
        const fileBlob = new File([fileStream], "logo-wide.png", { type: "image/png" });
        const fileInfo = await fs.stat("tests/assets/logo-wide.png");

        const createdAsset = await client.assets.postAsset({ file: fileBlob });

        const asset = await client.assets.getAsset({ id: createdAsset.id });
        expect(asset.id).toEqual(createdAsset.id);
        expect(asset.fileName).toEqual("logo-wide.png");
        expect(asset.fileSize).toEqual(fileInfo.size);
        expect(asset.mimeType).toEqual("image/png");
    });

    it("should upload and download asset", async () => {
        const fileStream = await fs.readFile("tests/assets/logo-wide.png");
        const fileBlob = new File([fileStream], "logo-wide.png", { type: "image/png" });
        const fileInfo = await fs.stat("tests/assets/logo-wide.png");

        const createdAsset = await client.assets.postAsset({ file: fileBlob });

        const assetResponse = await client.assets.getAssetContentBySlugRaw({ idOrSlug: createdAsset.id, more: "" });
        const assetBlob = await assetResponse.value();

        expect(assetResponse.raw.headers.get("Content-Type")).toEqual("image/png");
        expect(assetBlob.size).toEqual(fileInfo.size);
    });
});
