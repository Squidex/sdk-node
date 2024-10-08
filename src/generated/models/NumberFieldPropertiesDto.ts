/**
 * Squidex API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { FieldPropertiesDto } from './FieldPropertiesDto';
import {
    FieldPropertiesDtoFromJSONTyped,
    FieldPropertiesDtoToJSON,
} from './FieldPropertiesDto';
import type { NumberFieldEditor } from './NumberFieldEditor';
import {
    NumberFieldEditorFromJSON,
    NumberFieldEditorToJSON,
} from './NumberFieldEditor';

/**
 * 
 * @export
 * @interface NumberFieldPropertiesDto
 */
export interface NumberFieldPropertiesDto extends FieldPropertiesDto {
    /**
     * 
     * @type {{ [key: string]: number | null; }}
     * @memberof NumberFieldPropertiesDto
     */
    defaultValues?: { [key: string]: number | null; };
    /**
     * The default value for the field value.
     * @type {number}
     * @memberof NumberFieldPropertiesDto
     */
    defaultValue?: number | null;
    /**
     * The maximum allowed value for the field value.
     * @type {number}
     * @memberof NumberFieldPropertiesDto
     */
    maxValue?: number | null;
    /**
     * The minimum allowed value for the field value.
     * @type {number}
     * @memberof NumberFieldPropertiesDto
     */
    minValue?: number | null;
    /**
     * The allowed values for the field value.
     * @type {Array<number>}
     * @memberof NumberFieldPropertiesDto
     */
    allowedValues?: Array<number> | null;
    /**
     * Indicates if the field value must be unique. Ignored for nested fields and localized fields.
     * @type {boolean}
     * @memberof NumberFieldPropertiesDto
     */
    isUnique?: boolean;
    /**
     * Indicates that the inline editor is enabled for this field.
     * @type {boolean}
     * @memberof NumberFieldPropertiesDto
     */
    inlineEditable?: boolean;
    /**
     * 
     * @type {NumberFieldEditor}
     * @memberof NumberFieldPropertiesDto
     */
    editor?: NumberFieldEditor;
}




/**
 * Check if a given object implements the NumberFieldPropertiesDto interface.
 */
export function instanceOfNumberFieldPropertiesDto(value: any): value is NumberFieldPropertiesDto {
    if (!value) {
        return false;
    }
    return true;
}

export function NumberFieldPropertiesDtoFromJSON(json: any): NumberFieldPropertiesDto {
    return NumberFieldPropertiesDtoFromJSONTyped(json, false);
}

export function NumberFieldPropertiesDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): NumberFieldPropertiesDto {
    if (json == null) {
        return json;
    }
    return {
        ...FieldPropertiesDtoFromJSONTyped(json, _ignoreDiscriminator),
        'defaultValues': json['defaultValues'] == null ? undefined : json['defaultValues'],
        'defaultValue': json['defaultValue'] == null ? undefined : json['defaultValue'],
        'maxValue': json['maxValue'] == null ? undefined : json['maxValue'],
        'minValue': json['minValue'] == null ? undefined : json['minValue'],
        'allowedValues': json['allowedValues'] == null ? undefined : json['allowedValues'],
        'isUnique': json['isUnique'] == null ? undefined : json['isUnique'],
        'inlineEditable': json['inlineEditable'] == null ? undefined : json['inlineEditable'],
        'editor': json['editor'] == null ? undefined : NumberFieldEditorFromJSON(json['editor']),
    };
}

export function NumberFieldPropertiesDtoToJSON(value?: NumberFieldPropertiesDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...FieldPropertiesDtoToJSON(value, true),
        'defaultValues': value['defaultValues'],
        'defaultValue': value['defaultValue'],
        'maxValue': value['maxValue'],
        'minValue': value['minValue'],
        'allowedValues': value['allowedValues'],
        'isUnique': value['isUnique'],
        'inlineEditable': value['inlineEditable'],
        'editor': NumberFieldEditorToJSON(value['editor']),
    };
}
