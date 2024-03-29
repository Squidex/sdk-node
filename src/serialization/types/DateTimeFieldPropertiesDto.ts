/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const DateTimeFieldPropertiesDto: core.serialization.ObjectSchema<
    serializers.DateTimeFieldPropertiesDto.Raw,
    Squidex.DateTimeFieldPropertiesDto
> = core.serialization.object({
    defaultValues: core.serialization.lazy(async () => (await import("..")).LocalizedValueOfNullableInstant).optional(),
    defaultValue: core.serialization.date().optional(),
    maxValue: core.serialization.date().optional(),
    minValue: core.serialization.date().optional(),
    format: core.serialization.string().optional(),
    editor: core.serialization.lazy(async () => (await import("..")).DateTimeFieldEditor).optional(),
    calculatedDefaultValue: core.serialization
        .lazy(async () => (await import("..")).DateTimeCalculatedDefaultValue)
        .optional(),
});

export declare namespace DateTimeFieldPropertiesDto {
    interface Raw {
        defaultValues?: serializers.LocalizedValueOfNullableInstant.Raw | null;
        defaultValue?: string | null;
        maxValue?: string | null;
        minValue?: string | null;
        format?: string | null;
        editor?: serializers.DateTimeFieldEditor.Raw | null;
        calculatedDefaultValue?: serializers.DateTimeCalculatedDefaultValue.Raw | null;
    }
}
