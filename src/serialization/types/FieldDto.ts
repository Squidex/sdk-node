/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const FieldDto: core.serialization.ObjectSchema<serializers.FieldDto.Raw, Squidex.FieldDto> = core.serialization
    .object({
        fieldId: core.serialization.number(),
        name: core.serialization.string(),
        isHidden: core.serialization.boolean(),
        isLocked: core.serialization.boolean(),
        isDisabled: core.serialization.boolean(),
        partitioning: core.serialization.string(),
        properties: core.serialization.lazy(async () => (await import("..")).FieldPropertiesDto),
        nested: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).NestedFieldDto))
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).Resource));

export declare namespace FieldDto {
    interface Raw extends serializers.Resource.Raw {
        fieldId: number;
        name: string;
        isHidden: boolean;
        isLocked: boolean;
        isDisabled: boolean;
        partitioning: string;
        properties: serializers.FieldPropertiesDto.Raw;
        nested?: serializers.NestedFieldDto.Raw[] | null;
    }
}
