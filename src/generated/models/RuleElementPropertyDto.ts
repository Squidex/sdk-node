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
import type { RuleFieldEditor } from './RuleFieldEditor';
import {
    RuleFieldEditorFromJSON,
    RuleFieldEditorFromJSONTyped,
    RuleFieldEditorToJSON,
} from './RuleFieldEditor';

/**
 * 
 * @export
 * @interface RuleElementPropertyDto
 */
export interface RuleElementPropertyDto {
    /**
     * 
     * @type {RuleFieldEditor}
     * @memberof RuleElementPropertyDto
     */
    editor: RuleFieldEditor;
    /**
     * The name of the editor.
     * @type {string}
     * @memberof RuleElementPropertyDto
     */
    name: string;
    /**
     * The label to use.
     * @type {string}
     * @memberof RuleElementPropertyDto
     */
    display: string;
    /**
     * The options, if the editor is a dropdown.
     * @type {Array<string>}
     * @memberof RuleElementPropertyDto
     */
    options?: Array<string> | null;
    /**
     * The optional description.
     * @type {string}
     * @memberof RuleElementPropertyDto
     */
    description?: string | null;
    /**
     * Indicates if the property is formattable.
     * @type {boolean}
     * @memberof RuleElementPropertyDto
     */
    isFormattable: boolean;
    /**
     * Indicates if the property is required.
     * @type {boolean}
     * @memberof RuleElementPropertyDto
     */
    isRequired: boolean;
}




/**
 * Check if a given object implements the RuleElementPropertyDto interface.
 */
export function instanceOfRuleElementPropertyDto(value: any): value is RuleElementPropertyDto {
    if (!('editor' in value) || value['editor'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('display' in value) || value['display'] === undefined) return false;
    if (!('isFormattable' in value) || value['isFormattable'] === undefined) return false;
    if (!('isRequired' in value) || value['isRequired'] === undefined) return false;
    return true;
}

export function RuleElementPropertyDtoFromJSON(json: any): RuleElementPropertyDto {
    return RuleElementPropertyDtoFromJSONTyped(json, false);
}

export function RuleElementPropertyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleElementPropertyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'editor': RuleFieldEditorFromJSON(json['editor']),
        'name': json['name'],
        'display': json['display'],
        'options': json['options'] == null ? undefined : json['options'],
        'description': json['description'] == null ? undefined : json['description'],
        'isFormattable': json['isFormattable'],
        'isRequired': json['isRequired'],
    };
}

export function RuleElementPropertyDtoToJSON(value?: RuleElementPropertyDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'editor': RuleFieldEditorToJSON(value['editor']),
        'name': value['name'],
        'display': value['display'],
        'options': value['options'],
        'description': value['description'],
        'isFormattable': value['isFormattable'],
        'isRequired': value['isRequired'],
    };
}
