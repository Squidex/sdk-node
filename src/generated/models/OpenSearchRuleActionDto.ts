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
 * @interface OpenSearchRuleActionDto
 */
export interface OpenSearchRuleActionDto extends RuleActionDto {
    /**
     * The url to the instance or cluster.
     * @type {string}
     * @memberof OpenSearchRuleActionDto
     */
    host: string;
    /**
     * The name of the index.
     * @type {string}
     * @memberof OpenSearchRuleActionDto
     */
    indexName: string;
    /**
     * The optional username.
     * @type {string}
     * @memberof OpenSearchRuleActionDto
     */
    username?: string | null;
    /**
     * The optional password.
     * @type {string}
     * @memberof OpenSearchRuleActionDto
     */
    password?: string | null;
    /**
     * The optional custom document.
     * @type {string}
     * @memberof OpenSearchRuleActionDto
     */
    document?: string | null;
    /**
     * The condition when to delete the document.
     * @type {string}
     * @memberof OpenSearchRuleActionDto
     */
    _delete?: string | null;
}


/**
 * Check if a given object implements the OpenSearchRuleActionDto interface.
 */
export function instanceOfOpenSearchRuleActionDto(value: any): value is OpenSearchRuleActionDto {
    if (!value) {
        return false;
    }
    if (!('host' in value) || value['host'] === undefined) return false;
    if (!('indexName' in value) || value['indexName'] === undefined) return false;
    return true;
}

export function OpenSearchRuleActionDtoFromJSON(json: any): OpenSearchRuleActionDto {
    return OpenSearchRuleActionDtoFromJSONTyped(json, false);
}

export function OpenSearchRuleActionDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): OpenSearchRuleActionDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleActionDtoFromJSONTyped(json, _ignoreDiscriminator),
        'host': json['host'],
        'indexName': json['indexName'],
        'username': json['username'] == null ? undefined : json['username'],
        'password': json['password'] == null ? undefined : json['password'],
        'document': json['document'] == null ? undefined : json['document'],
        '_delete': json['delete'] == null ? undefined : json['delete'],
    };
}

export function OpenSearchRuleActionDtoToJSON(value?: OpenSearchRuleActionDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleActionDtoToJSON(value, true),
        'host': value['host'],
        'indexName': value['indexName'],
        'username': value['username'],
        'password': value['password'],
        'document': value['document'],
        'delete': value['_delete'],
    };
}
