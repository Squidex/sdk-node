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
 * @interface RenameTagDto
 */
export interface RenameTagDto {
    /**
     * The new name for the tag.
     * @type {string}
     * @memberof RenameTagDto
     */
    tagName: string;
}

/**
 * Check if a given object implements the RenameTagDto interface.
 */
export function instanceOfRenameTagDto(value: object): value is RenameTagDto {
    if (!('tagName' in value) || value['tagName'] === undefined) return false;
    return true;
}

export function RenameTagDtoFromJSON(json: any): RenameTagDto {
    return RenameTagDtoFromJSONTyped(json, false);
}

export function RenameTagDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenameTagDto {
    if (json == null) {
        return json;
    }
    return {
        
        'tagName': json['tagName'],
    };
}

export function RenameTagDtoToJSON(value?: RenameTagDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tagName': value['tagName'],
    };
}
