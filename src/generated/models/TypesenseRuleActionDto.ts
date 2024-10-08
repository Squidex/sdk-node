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

import type { RuleActionDto } from './RuleActionDto';
import {
    RuleActionDtoFromJSONTyped,
    RuleActionDtoToJSON,
} from './RuleActionDto';

/**
 * 
 * @export
 * @interface TypesenseRuleActionDto
 */
export interface TypesenseRuleActionDto extends RuleActionDto {
    /**
     * The url to the instance or cluster.
     * @type {string}
     * @memberof TypesenseRuleActionDto
     */
    host: string;
    /**
     * The name of the index.
     * @type {string}
     * @memberof TypesenseRuleActionDto
     */
    indexName: string;
    /**
     * The api key.
     * @type {string}
     * @memberof TypesenseRuleActionDto
     */
    apiKey: string;
    /**
     * The optional custom document.
     * @type {string}
     * @memberof TypesenseRuleActionDto
     */
    document?: string | null;
    /**
     * The condition when to delete the document.
     * @type {string}
     * @memberof TypesenseRuleActionDto
     */
    _delete?: string | null;
}


/**
 * Check if a given object implements the TypesenseRuleActionDto interface.
 */
export function instanceOfTypesenseRuleActionDto(value: any): value is TypesenseRuleActionDto {
    if (!value) {
        return false;
    }
    if (!('host' in value) || value['host'] === undefined) return false;
    if (!('indexName' in value) || value['indexName'] === undefined) return false;
    if (!('apiKey' in value) || value['apiKey'] === undefined) return false;
    return true;
}

export function TypesenseRuleActionDtoFromJSON(json: any): TypesenseRuleActionDto {
    return TypesenseRuleActionDtoFromJSONTyped(json, false);
}

export function TypesenseRuleActionDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TypesenseRuleActionDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleActionDtoFromJSONTyped(json, _ignoreDiscriminator),
        'host': json['host'],
        'indexName': json['indexName'],
        'apiKey': json['apiKey'],
        'document': json['document'] == null ? undefined : json['document'],
        '_delete': json['delete'] == null ? undefined : json['delete'],
    };
}

export function TypesenseRuleActionDtoToJSON(value?: TypesenseRuleActionDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleActionDtoToJSON(value, true),
        'host': value['host'],
        'indexName': value['indexName'],
        'apiKey': value['apiKey'],
        'document': value['document'],
        'delete': value['_delete'],
    };
}
