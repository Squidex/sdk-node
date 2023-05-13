/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface NumberFieldPropertiesDto {
    defaultValues?: Squidex.LocalizedValueOfNullableDouble;
    /** The default value for the field value. */
    defaultValue?: number;
    /** The maximum allowed value for the field value. */
    maxValue?: number;
    /** The minimum allowed value for the field value. */
    minValue?: number;
    /** The allowed values for the field value. */
    allowedValues?: number[];
    /** Indicates if the field value must be unique. Ignored for nested fields and localized fields. */
    isUnique?: boolean;
    /** Indicates that the inline editor is enabled for this field. */
    inlineEditable?: boolean;
    editor?: Squidex.NumberFieldEditor;
}
