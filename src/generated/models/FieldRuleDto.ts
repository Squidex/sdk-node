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
import type { FieldRuleAction } from './FieldRuleAction';
import {
    FieldRuleActionFromJSON,
    FieldRuleActionFromJSONTyped,
    FieldRuleActionToJSON,
} from './FieldRuleAction';

/**
 * 
 * @export
 * @interface FieldRuleDto
 */
export interface FieldRuleDto {
    /**
     * 
     * @type {FieldRuleAction}
     * @memberof FieldRuleDto
     */
    action: FieldRuleAction;
    /**
     * The field to update.
     * @type {string}
     * @memberof FieldRuleDto
     */
    field: string;
    /**
     * The condition.
     * @type {string}
     * @memberof FieldRuleDto
     */
    condition?: string | null;
}




/**
 * Check if a given object implements the FieldRuleDto interface.
 */
export function instanceOfFieldRuleDto(value: any): value is FieldRuleDto {
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('field' in value) || value['field'] === undefined) return false;
    return true;
}

export function FieldRuleDtoFromJSON(json: any): FieldRuleDto {
    return FieldRuleDtoFromJSONTyped(json, false);
}

export function FieldRuleDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldRuleDto {
    if (json == null) {
        return json;
    }
    return {
        
        'action': FieldRuleActionFromJSON(json['action']),
        'field': json['field'],
        'condition': json['condition'] == null ? undefined : json['condition'],
    };
}

export function FieldRuleDtoToJSON(value?: FieldRuleDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': FieldRuleActionToJSON(value['action']),
        'field': value['field'],
        'condition': value['condition'],
    };
}
