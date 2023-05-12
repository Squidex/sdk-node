/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ReferencesFieldPropertiesDto: core.serialization.ObjectSchema<
    serializers.ReferencesFieldPropertiesDto.Raw,
    Squidex.ReferencesFieldPropertiesDto
> = core.serialization.object({
    defaultValues: core.serialization
        .lazy(async () => (await import("..")).LocalizedValueOfReadonlyListOfString)
        .optional(),
    defaultValue: core.serialization.list(core.serialization.string()).optional(),
    minItems: core.serialization.number().optional(),
    maxItems: core.serialization.number().optional(),
    allowDuplicates: core.serialization.boolean(),
    resolveReference: core.serialization.boolean(),
    mustBePublished: core.serialization.boolean(),
    editor: core.serialization.lazy(async () => (await import("..")).ReferencesFieldEditor),
    schemaIds: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ReferencesFieldPropertiesDto {
    interface Raw {
        defaultValues?: serializers.LocalizedValueOfReadonlyListOfString.Raw | null;
        defaultValue?: string[] | null;
        minItems?: number | null;
        maxItems?: number | null;
        allowDuplicates: boolean;
        resolveReference: boolean;
        mustBePublished: boolean;
        editor: serializers.ReferencesFieldEditor.Raw;
        schemaIds?: string[] | null;
    }
}
