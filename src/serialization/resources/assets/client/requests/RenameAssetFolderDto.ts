/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const RenameAssetFolderDto: core.serialization.Schema<
    serializers.RenameAssetFolderDto.Raw,
    Squidex.RenameAssetFolderDto
> = core.serialization.object({
    folderName: core.serialization.string(),
});

export declare namespace RenameAssetFolderDto {
    interface Raw {
        folderName: string;
    }
}
