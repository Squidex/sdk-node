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
/**
 * 
 * @export
 * @interface PatternDto
 */
export interface PatternDto {
    /**
     * The name of the suggestion.
     * @type {string}
     * @memberof PatternDto
     */
    name: string;
    /**
     * The regex pattern.
     * @type {string}
     * @memberof PatternDto
     */
    regex: string;
    /**
     * The regex message.
     * @type {string}
     * @memberof PatternDto
     */
    message?: string | null;
}


/**
 * Check if a given object implements the PatternDto interface.
 */
export function instanceOfPatternDto(value: any): value is PatternDto {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('regex' in value) || value['regex'] === undefined) return false;
    return true;
}

export function PatternDtoFromJSON(json: any): PatternDto {
    return PatternDtoFromJSONTyped(json, false);
}

export function PatternDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatternDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'regex': json['regex'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function PatternDtoToJSON(value?: PatternDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'regex': value['regex'],
        'message': value['message'],
    };
}
