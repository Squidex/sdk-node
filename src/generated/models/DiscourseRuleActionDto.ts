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
 * @interface DiscourseRuleActionDto
 */
export interface DiscourseRuleActionDto extends RuleActionDto {
    /**
     * The url to the discourse server.
     * @type {string}
     * @memberof DiscourseRuleActionDto
     */
    url: string;
    /**
     * The api key to authenticate to your discourse server.
     * @type {string}
     * @memberof DiscourseRuleActionDto
     */
    apiKey: string;
    /**
     * The api username to authenticate to your discourse server.
     * @type {string}
     * @memberof DiscourseRuleActionDto
     */
    apiUsername: string;
    /**
     * The text as markdown.
     * @type {string}
     * @memberof DiscourseRuleActionDto
     */
    text: string;
    /**
     * The optional title when creating new topics.
     * @type {string}
     * @memberof DiscourseRuleActionDto
     */
    title?: string | null;
    /**
     * The optional topic id.
     * @type {number}
     * @memberof DiscourseRuleActionDto
     */
    topic?: number | null;
    /**
     * The optional category id.
     * @type {number}
     * @memberof DiscourseRuleActionDto
     */
    category?: number | null;
}


/**
 * Check if a given object implements the DiscourseRuleActionDto interface.
 */
export function instanceOfDiscourseRuleActionDto(value: any): value is DiscourseRuleActionDto {
    if (!value) {
        return false;
    }
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('apiKey' in value) || value['apiKey'] === undefined) return false;
    if (!('apiUsername' in value) || value['apiUsername'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function DiscourseRuleActionDtoFromJSON(json: any): DiscourseRuleActionDto {
    return DiscourseRuleActionDtoFromJSONTyped(json, false);
}

export function DiscourseRuleActionDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): DiscourseRuleActionDto {
    if (json == null) {
        return json;
    }
    return {
        ...RuleActionDtoFromJSONTyped(json, _ignoreDiscriminator),
        'url': json['url'],
        'apiKey': json['apiKey'],
        'apiUsername': json['apiUsername'],
        'text': json['text'],
        'title': json['title'] == null ? undefined : json['title'],
        'topic': json['topic'] == null ? undefined : json['topic'],
        'category': json['category'] == null ? undefined : json['category'],
    };
}

export function DiscourseRuleActionDtoToJSON(value?: DiscourseRuleActionDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...RuleActionDtoToJSON(value, true),
        'url': value['url'],
        'apiKey': value['apiKey'],
        'apiUsername': value['apiUsername'],
        'text': value['text'],
        'title': value['title'],
        'topic': value['topic'],
        'category': value['category'],
    };
}
