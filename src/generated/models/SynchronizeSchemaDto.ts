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

import type { SchemaPropertiesDto } from './SchemaPropertiesDto';
import {
    SchemaPropertiesDtoFromJSON,
    SchemaPropertiesDtoToJSON,
} from './SchemaPropertiesDto';
import type { SchemaScriptsDto } from './SchemaScriptsDto';
import {
    SchemaScriptsDtoFromJSON,
    SchemaScriptsDtoToJSON,
} from './SchemaScriptsDto';
import type { UpsertSchemaFieldDto } from './UpsertSchemaFieldDto';
import {
    UpsertSchemaFieldDtoFromJSON,
    UpsertSchemaFieldDtoToJSON,
} from './UpsertSchemaFieldDto';
import type { FieldRuleDto } from './FieldRuleDto';
import {
    FieldRuleDtoFromJSON,
    FieldRuleDtoToJSON,
} from './FieldRuleDto';

/**
 * 
 * @export
 * @interface SynchronizeSchemaDto
 */
export interface SynchronizeSchemaDto {
    /**
     * 
     * @type {SchemaPropertiesDto}
     * @memberof SynchronizeSchemaDto
     */
    properties?: SchemaPropertiesDto;
    /**
     * 
     * @type {SchemaScriptsDto}
     * @memberof SynchronizeSchemaDto
     */
    scripts?: SchemaScriptsDto;
    /**
     * The names of the fields that should be used in references.
     * @type {Array<string>}
     * @memberof SynchronizeSchemaDto
     */
    fieldsInReferences?: Array<string> | null;
    /**
     * The names of the fields that should be shown in lists, including meta fields.
     * @type {Array<string>}
     * @memberof SynchronizeSchemaDto
     */
    fieldsInLists?: Array<string> | null;
    /**
     * Optional fields.
     * @type {Array<UpsertSchemaFieldDto>}
     * @memberof SynchronizeSchemaDto
     */
    fields?: Array<UpsertSchemaFieldDto> | null;
    /**
     * The optional preview urls.
     * @type {{ [key: string]: string; }}
     * @memberof SynchronizeSchemaDto
     */
    previewUrls?: { [key: string]: string; } | null;
    /**
     * The optional field Rules.
     * @type {Array<FieldRuleDto>}
     * @memberof SynchronizeSchemaDto
     */
    fieldRules?: Array<FieldRuleDto> | null;
    /**
     * The category.
     * @type {string}
     * @memberof SynchronizeSchemaDto
     */
    category?: string | null;
    /**
     * Set it to true to autopublish the schema.
     * @type {boolean}
     * @memberof SynchronizeSchemaDto
     */
    isPublished?: boolean;
    /**
     * True, when fields should not be deleted.
     * @type {boolean}
     * @memberof SynchronizeSchemaDto
     */
    noFieldDeletion?: boolean;
    /**
     * True, when fields with different types should not be recreated.
     * @type {boolean}
     * @memberof SynchronizeSchemaDto
     */
    noFieldRecreation?: boolean;
}


/**
 * Check if a given object implements the SynchronizeSchemaDto interface.
 */
export function instanceOfSynchronizeSchemaDto(value: any): value is SynchronizeSchemaDto {
    if (!value) {
        return false;
    }
    return true;
}

export function SynchronizeSchemaDtoFromJSON(json: any): SynchronizeSchemaDto {
    return SynchronizeSchemaDtoFromJSONTyped(json, false);
}

export function SynchronizeSchemaDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SynchronizeSchemaDto {
    if (json == null) {
        return json;
    }
    return {
        
        'properties': json['properties'] == null ? undefined : SchemaPropertiesDtoFromJSON(json['properties']),
        'scripts': json['scripts'] == null ? undefined : SchemaScriptsDtoFromJSON(json['scripts']),
        'fieldsInReferences': json['fieldsInReferences'] == null ? undefined : json['fieldsInReferences'],
        'fieldsInLists': json['fieldsInLists'] == null ? undefined : json['fieldsInLists'],
        'fields': json['fields'] == null ? undefined : ((json['fields'] as Array<any>).map(UpsertSchemaFieldDtoFromJSON)),
        'previewUrls': json['previewUrls'] == null ? undefined : json['previewUrls'],
        'fieldRules': json['fieldRules'] == null ? undefined : ((json['fieldRules'] as Array<any>).map(FieldRuleDtoFromJSON)),
        'category': json['category'] == null ? undefined : json['category'],
        'isPublished': json['isPublished'] == null ? undefined : json['isPublished'],
        'noFieldDeletion': json['noFieldDeletion'] == null ? undefined : json['noFieldDeletion'],
        'noFieldRecreation': json['noFieldRecreation'] == null ? undefined : json['noFieldRecreation'],
    };
}

export function SynchronizeSchemaDtoToJSON(value?: SynchronizeSchemaDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'properties': SchemaPropertiesDtoToJSON(value['properties']),
        'scripts': SchemaScriptsDtoToJSON(value['scripts']),
        'fieldsInReferences': value['fieldsInReferences'],
        'fieldsInLists': value['fieldsInLists'],
        'fields': value['fields'] == null ? undefined : ((value['fields'] as Array<any>).map(x => UpsertSchemaFieldDtoToJSON(x))),
        'previewUrls': value['previewUrls'],
        'fieldRules': value['fieldRules'] == null ? undefined : ((value['fieldRules'] as Array<any>).map(x => FieldRuleDtoToJSON(x))),
        'category': value['category'],
        'isPublished': value['isPublished'],
        'noFieldDeletion': value['noFieldDeletion'],
        'noFieldRecreation': value['noFieldRecreation'],
    };
}
