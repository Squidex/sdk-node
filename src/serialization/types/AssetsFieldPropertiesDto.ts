/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const AssetsFieldPropertiesDto: core.serialization.ObjectSchema<
    serializers.AssetsFieldPropertiesDto.Raw,
    Squidex.AssetsFieldPropertiesDto
> = core.serialization.object({
    previewMode: core.serialization.lazy(async () => (await import("..")).AssetPreviewMode),
    defaultValues: core.serialization
        .lazy(async () => (await import("..")).LocalizedValueOfReadonlyListOfString)
        .optional(),
    defaultValue: core.serialization.list(core.serialization.string()).optional(),
    folderId: core.serialization.string().optional(),
    previewFormat: core.serialization.string().optional(),
    minItems: core.serialization.number().optional(),
    maxItems: core.serialization.number().optional(),
    minSize: core.serialization.number().optional(),
    maxSize: core.serialization.number().optional(),
    minWidth: core.serialization.number().optional(),
    maxWidth: core.serialization.number().optional(),
    minHeight: core.serialization.number().optional(),
    maxHeight: core.serialization.number().optional(),
    aspectWidth: core.serialization.number().optional(),
    aspectHeight: core.serialization.number().optional(),
    expectedType: core.serialization.lazy(async () => (await import("..")).AssetType).optional(),
    resolveFirst: core.serialization.boolean(),
    mustBeImage: core.serialization.boolean(),
    resolveImage: core.serialization.boolean(),
    allowedExtensions: core.serialization.list(core.serialization.string()).optional(),
    allowDuplicates: core.serialization.boolean(),
});

export declare namespace AssetsFieldPropertiesDto {
    interface Raw {
        previewMode: serializers.AssetPreviewMode.Raw;
        defaultValues?: serializers.LocalizedValueOfReadonlyListOfString.Raw | null;
        defaultValue?: string[] | null;
        folderId?: string | null;
        previewFormat?: string | null;
        minItems?: number | null;
        maxItems?: number | null;
        minSize?: number | null;
        maxSize?: number | null;
        minWidth?: number | null;
        maxWidth?: number | null;
        minHeight?: number | null;
        maxHeight?: number | null;
        aspectWidth?: number | null;
        aspectHeight?: number | null;
        expectedType?: serializers.AssetType.Raw | null;
        resolveFirst: boolean;
        mustBeImage: boolean;
        resolveImage: boolean;
        allowedExtensions?: string[] | null;
        allowDuplicates: boolean;
    }
}
