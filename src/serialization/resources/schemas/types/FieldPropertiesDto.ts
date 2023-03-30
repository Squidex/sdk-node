/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SquidexApi } from "@fern-api/squidex";
import * as core from "../../../../core";

export const FieldPropertiesDto: core.serialization.ObjectSchema<
    serializers.FieldPropertiesDto.Raw,
    SquidexApi.FieldPropertiesDto
> = core.serialization.object({
    label: core.serialization.string().optional(),
    hints: core.serialization.string().optional(),
    placeholder: core.serialization.string().optional(),
    isRequired: core.serialization.boolean().optional(),
    isRequiredOnPublish: core.serialization.boolean().optional(),
    isHalfWidth: core.serialization.boolean().optional(),
    editorUrl: core.serialization.string().optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
    fieldType: core.serialization.string(),
});

export declare namespace FieldPropertiesDto {
    interface Raw {
        label?: string | null;
        hints?: string | null;
        placeholder?: string | null;
        isRequired?: boolean | null;
        isRequiredOnPublish?: boolean | null;
        isHalfWidth?: boolean | null;
        editorUrl?: string | null;
        tags?: string[] | null;
        fieldType: string;
    }
}
