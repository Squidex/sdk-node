/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const SchemaDto: core.serialization.ObjectSchema<serializers.SchemaDto.Raw, Squidex.SchemaDto> =
    core.serialization.object({
        id: core.serialization.string(),
        createdBy: core.serialization.string(),
        lastModifiedBy: core.serialization.string(),
        name: core.serialization.string(),
        type: core.serialization.lazy(async () => (await import("..")).SchemaType),
        category: core.serialization.string().optional(),
        properties: core.serialization.lazyObject(async () => (await import("..")).SchemaPropertiesDto),
        isSingleton: core.serialization.boolean(),
        isPublished: core.serialization.boolean(),
        created: core.serialization.string(),
        lastModified: core.serialization.string(),
        version: core.serialization.number(),
        scripts: core.serialization.lazyObject(async () => (await import("..")).SchemaScriptsDto),
        previewUrls: core.serialization.record(core.serialization.string(), core.serialization.string()),
        fieldsInLists: core.serialization.list(core.serialization.string()),
        fieldsInReferences: core.serialization.list(core.serialization.string()),
        fieldRules: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("..")).FieldRuleDto)
        ),
        fields: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).FieldDto)),
    });

export declare namespace SchemaDto {
    interface Raw {
        id: string;
        createdBy: string;
        lastModifiedBy: string;
        name: string;
        type: serializers.SchemaType.Raw;
        category?: string | null;
        properties: serializers.SchemaPropertiesDto.Raw;
        isSingleton: boolean;
        isPublished: boolean;
        created: string;
        lastModified: string;
        version: number;
        scripts: serializers.SchemaScriptsDto.Raw;
        previewUrls: Record<string, string>;
        fieldsInLists: string[];
        fieldsInReferences: string[];
        fieldRules: serializers.FieldRuleDto.Raw[];
        fields: serializers.FieldDto.Raw[];
    }
}
