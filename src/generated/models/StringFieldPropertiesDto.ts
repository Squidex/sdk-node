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
import type { StringFieldEditor } from './StringFieldEditor';
import {
    StringFieldEditorFromJSON,
    StringFieldEditorToJSON,
} from './StringFieldEditor';
import type { StringContentType } from './StringContentType';
import {
    StringContentTypeFromJSON,
    StringContentTypeToJSON,
} from './StringContentType';

/**
 * 
 * @export
 * @interface StringFieldPropertiesDto
 */
export interface StringFieldPropertiesDto extends FieldPropertiesDto {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof StringFieldPropertiesDto
     */
    defaultValues?: { [key: string]: string; };
    /**
     * The default value for the field value.
     * @type {string}
     * @memberof StringFieldPropertiesDto
     */
    defaultValue?: string | null;
    /**
     * The pattern to enforce a specific format for the field value.
     * @type {string}
     * @memberof StringFieldPropertiesDto
     */
    pattern?: string | null;
    /**
     * The validation message for the pattern.
     * @type {string}
     * @memberof StringFieldPropertiesDto
     */
    patternMessage?: string | null;
    /**
     * The initial id to the folder when the control supports file uploads.
     * @type {string}
     * @memberof StringFieldPropertiesDto
     */
    folderId?: string | null;
    /**
     * The minimum allowed length for the field value.
     * @type {number}
     * @memberof StringFieldPropertiesDto
     */
    minLength?: number | null;
    /**
     * The maximum allowed length for the field value.
     * @type {number}
     * @memberof StringFieldPropertiesDto
     */
    maxLength?: number | null;
    /**
     * The minimum allowed of normal characters for the field value.
     * @type {number}
     * @memberof StringFieldPropertiesDto
     */
    minCharacters?: number | null;
    /**
     * The maximum allowed of normal characters for the field value.
     * @type {number}
     * @memberof StringFieldPropertiesDto
     */
    maxCharacters?: number | null;
    /**
     * The minimum allowed number of words for the field value.
     * @type {number}
     * @memberof StringFieldPropertiesDto
     */
    minWords?: number | null;
    /**
     * The maximum allowed number of words for the field value.
     * @type {number}
     * @memberof StringFieldPropertiesDto
     */
    maxWords?: number | null;
    /**
     * The class names for the editor.
     * @type {Array<string>}
     * @memberof StringFieldPropertiesDto
     */
    classNames?: Array<string> | null;
    /**
     * The allowed values for the field value.
     * @type {Array<string>}
     * @memberof StringFieldPropertiesDto
     */
    allowedValues?: Array<string> | null;
    /**
     * The allowed schema ids that can be embedded.
     * @type {Array<string>}
     * @memberof StringFieldPropertiesDto
     */
    schemaIds?: Array<string> | null;
    /**
     * Indicates if the field value must be unique. Ignored for nested fields and localized fields.
     * @type {boolean}
     * @memberof StringFieldPropertiesDto
     */
    isUnique?: boolean;
    /**
     * Indicates that other content items or references are embedded.
     * @type {boolean}
     * @memberof StringFieldPropertiesDto
     */
    isEmbeddable?: boolean;
    /**
     * Indicates that the inline editor is enabled for this field.
     * @type {boolean}
     * @memberof StringFieldPropertiesDto
     */
    inlineEditable?: boolean;
    /**
     * Indicates whether GraphQL Enum should be created.
     * @type {boolean}
     * @memberof StringFieldPropertiesDto
     */
    createEnum?: boolean;
    /**
     * 
     * @type {StringContentType}
     * @memberof StringFieldPropertiesDto
     */
    contentType?: StringContentType;
    /**
     * 
     * @type {StringFieldEditor}
     * @memberof StringFieldPropertiesDto
     */
    editor?: StringFieldEditor;
}




/**
 * Check if a given object implements the StringFieldPropertiesDto interface.
 */
export function instanceOfStringFieldPropertiesDto(value: any): value is StringFieldPropertiesDto {
    if (!value) {
        return false;
    }
    return true;
}

export function StringFieldPropertiesDtoFromJSON(json: any): StringFieldPropertiesDto {
    return StringFieldPropertiesDtoFromJSONTyped(json, false);
}

export function StringFieldPropertiesDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): StringFieldPropertiesDto {
    if (json == null) {
        return json;
    }
    return {
        ...FieldPropertiesDtoFromJSONTyped(json, _ignoreDiscriminator),
        'defaultValues': json['defaultValues'] == null ? undefined : json['defaultValues'],
        'defaultValue': json['defaultValue'] == null ? undefined : json['defaultValue'],
        'pattern': json['pattern'] == null ? undefined : json['pattern'],
        'patternMessage': json['patternMessage'] == null ? undefined : json['patternMessage'],
        'folderId': json['folderId'] == null ? undefined : json['folderId'],
        'minLength': json['minLength'] == null ? undefined : json['minLength'],
        'maxLength': json['maxLength'] == null ? undefined : json['maxLength'],
        'minCharacters': json['minCharacters'] == null ? undefined : json['minCharacters'],
        'maxCharacters': json['maxCharacters'] == null ? undefined : json['maxCharacters'],
        'minWords': json['minWords'] == null ? undefined : json['minWords'],
        'maxWords': json['maxWords'] == null ? undefined : json['maxWords'],
        'classNames': json['classNames'] == null ? undefined : json['classNames'],
        'allowedValues': json['allowedValues'] == null ? undefined : json['allowedValues'],
        'schemaIds': json['schemaIds'] == null ? undefined : json['schemaIds'],
        'isUnique': json['isUnique'] == null ? undefined : json['isUnique'],
        'isEmbeddable': json['isEmbeddable'] == null ? undefined : json['isEmbeddable'],
        'inlineEditable': json['inlineEditable'] == null ? undefined : json['inlineEditable'],
        'createEnum': json['createEnum'] == null ? undefined : json['createEnum'],
        'contentType': json['contentType'] == null ? undefined : StringContentTypeFromJSON(json['contentType']),
        'editor': json['editor'] == null ? undefined : StringFieldEditorFromJSON(json['editor']),
    };
}

export function StringFieldPropertiesDtoToJSON(value?: StringFieldPropertiesDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...FieldPropertiesDtoToJSON(value, true),
        'defaultValues': value['defaultValues'],
        'defaultValue': value['defaultValue'],
        'pattern': value['pattern'],
        'patternMessage': value['patternMessage'],
        'folderId': value['folderId'],
        'minLength': value['minLength'],
        'maxLength': value['maxLength'],
        'minCharacters': value['minCharacters'],
        'maxCharacters': value['maxCharacters'],
        'minWords': value['minWords'],
        'maxWords': value['maxWords'],
        'classNames': value['classNames'],
        'allowedValues': value['allowedValues'],
        'schemaIds': value['schemaIds'],
        'isUnique': value['isUnique'],
        'isEmbeddable': value['isEmbeddable'],
        'inlineEditable': value['inlineEditable'],
        'createEnum': value['createEnum'],
        'contentType': StringContentTypeToJSON(value['contentType']),
        'editor': StringFieldEditorToJSON(value['editor']),
    };
}
