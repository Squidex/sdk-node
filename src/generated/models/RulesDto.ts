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
import type { RuleDto } from './RuleDto';
import {
    RuleDtoFromJSON,
    RuleDtoFromJSONTyped,
    RuleDtoToJSON,
} from './RuleDto';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';

/**
 * 
 * @export
 * @interface RulesDto
 */
export interface RulesDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof RulesDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The rules.
     * @type {Array<RuleDto>}
     * @memberof RulesDto
     */
    items: Array<RuleDto>;
    /**
     * The ID of the rule that is currently rerunning.
     * @type {string}
     * @memberof RulesDto
     */
    runningRuleId?: string | null;
}

/**
 * Check if a given object implements the RulesDto interface.
 */
export function instanceOfRulesDto(value: object): value is RulesDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function RulesDtoFromJSON(json: any): RulesDto {
    return RulesDtoFromJSONTyped(json, false);
}

export function RulesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RulesDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'items': ((json['items'] as Array<any>).map(RuleDtoFromJSON)),
        'runningRuleId': json['runningRuleId'] == null ? undefined : json['runningRuleId'],
    };
}

export function RulesDtoToJSON(value?: RulesDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'items': ((value['items'] as Array<any>).map(RuleDtoToJSON)),
        'runningRuleId': value['runningRuleId'],
    };
}
