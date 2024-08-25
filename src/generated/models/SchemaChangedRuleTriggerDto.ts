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
import type { RuleTriggerDto } from './RuleTriggerDto';
import {
    RuleTriggerDtoFromJSON,
    RuleTriggerDtoFromJSONTyped,
    RuleTriggerDtoToJSON,
} from './RuleTriggerDto';

/**
 * 
 * @export
 * @interface SchemaChangedRuleTriggerDto
 */
export interface SchemaChangedRuleTriggerDto extends RuleTriggerDto {
    /**
     * Javascript condition when to trigger.
     * @type {string}
     * @memberof SchemaChangedRuleTriggerDto
     */
    condition?: string | null;
}

/**
 * Check if a given object implements the SchemaChangedRuleTriggerDto interface.
 */
export function instanceOfSchemaChangedRuleTriggerDto(value: object): value is SchemaChangedRuleTriggerDto {
    return true;
}

export function SchemaChangedRuleTriggerDtoFromJSON(json: any): SchemaChangedRuleTriggerDto {
    return SchemaChangedRuleTriggerDtoFromJSONTyped(json, false);
}

export function SchemaChangedRuleTriggerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaChangedRuleTriggerDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleTriggerDtoFromJSONTyped(json, ignoreDiscriminator),
        'condition': json['condition'] == null ? undefined : json['condition'],
    };
}

export function SchemaChangedRuleTriggerDtoToJSON(value?: SchemaChangedRuleTriggerDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleTriggerDtoToJSON(value, true),
        'condition': value['condition'],
    };
}
