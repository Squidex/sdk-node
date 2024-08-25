/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { FieldPropertiesDto } from './FieldPropertiesDto';
import {
    FieldPropertiesDtoFromJSON,
    FieldPropertiesDtoFromJSONTyped,
    FieldPropertiesDtoToJSON,
} from './FieldPropertiesDto';
import type { ReferencesFieldEditor } from './ReferencesFieldEditor';
import {
    ReferencesFieldEditorFromJSON,
    ReferencesFieldEditorFromJSONTyped,
    ReferencesFieldEditorToJSON,
} from './ReferencesFieldEditor';

/**
 * 
 * @export
 * @interface ReferencesFieldPropertiesDto
 */
export interface ReferencesFieldPropertiesDto extends FieldPropertiesDto {
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ReferencesFieldPropertiesDto
     */
    defaultValues?: { [key: string]: Array<string>; };
    /**
     * The default value as a list of content ids.
     * @type {Array<string>}
     * @memberof ReferencesFieldPropertiesDto
     */
    defaultValue?: Array<string> | null;
    /**
     * The minimum allowed items for the field value.
     * @type {number}
     * @memberof ReferencesFieldPropertiesDto
     */
    minItems?: number | null;
    /**
     * The maximum allowed items for the field value.
     * @type {number}
     * @memberof ReferencesFieldPropertiesDto
     */
    maxItems?: number | null;
    /**
     * True, if duplicate values are allowed.
     * @type {boolean}
     * @memberof ReferencesFieldPropertiesDto
     */
    allowDuplicates?: boolean;
    /**
     * True to resolve references in the content list.
     * @type {boolean}
     * @memberof ReferencesFieldPropertiesDto
     */
    resolveReference?: boolean;
    /**
     * True when all references must be published.
     * @type {boolean}
     * @memberof ReferencesFieldPropertiesDto
     */
    mustBePublished?: boolean;
    /**
     * The initial query that is applied in the UI.
     * @type {string}
     * @memberof ReferencesFieldPropertiesDto
     */
    query?: string | null;
    /**
     * 
     * @type {ReferencesFieldEditor}
     * @memberof ReferencesFieldPropertiesDto
     */
    editor?: ReferencesFieldEditor;
    /**
     * The ID of the referenced schemas.
     * @type {Array<string>}
     * @memberof ReferencesFieldPropertiesDto
     */
    schemaIds?: Array<string> | null;
}




/**
 * Check if a given object implements the ReferencesFieldPropertiesDto interface.
 */
export function instanceOfReferencesFieldPropertiesDto(value: object): value is ReferencesFieldPropertiesDto {
    return true;
}

export function ReferencesFieldPropertiesDtoFromJSON(json: any): ReferencesFieldPropertiesDto {
    return ReferencesFieldPropertiesDtoFromJSONTyped(json, false);
}

export function ReferencesFieldPropertiesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencesFieldPropertiesDto {
    if (json == null) {
        return json;
    }
    return {
        ...FieldPropertiesDtoFromJSONTyped(json, ignoreDiscriminator),
        'defaultValues': json['defaultValues'] == null ? undefined : json['defaultValues'],
        'defaultValue': json['defaultValue'] == null ? undefined : json['defaultValue'],
        'minItems': json['minItems'] == null ? undefined : json['minItems'],
        'maxItems': json['maxItems'] == null ? undefined : json['maxItems'],
        'allowDuplicates': json['allowDuplicates'] == null ? undefined : json['allowDuplicates'],
        'resolveReference': json['resolveReference'] == null ? undefined : json['resolveReference'],
        'mustBePublished': json['mustBePublished'] == null ? undefined : json['mustBePublished'],
        'query': json['query'] == null ? undefined : json['query'],
        'editor': json['editor'] == null ? undefined : ReferencesFieldEditorFromJSON(json['editor']),
        'schemaIds': json['schemaIds'] == null ? undefined : json['schemaIds'],
    };
}

export function ReferencesFieldPropertiesDtoToJSON(value?: ReferencesFieldPropertiesDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...FieldPropertiesDtoToJSON(value, true),
        'defaultValues': value['defaultValues'],
        'defaultValue': value['defaultValue'],
        'minItems': value['minItems'],
        'maxItems': value['maxItems'],
        'allowDuplicates': value['allowDuplicates'],
        'resolveReference': value['resolveReference'],
        'mustBePublished': value['mustBePublished'],
        'query': value['query'],
        'editor': ReferencesFieldEditorToJSON(value['editor']),
        'schemaIds': value['schemaIds'],
    };
}