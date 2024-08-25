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
 * @interface ChangeCategoryDto
 */
export interface ChangeCategoryDto {
    /**
     * The name of the category.
     * @type {string}
     * @memberof ChangeCategoryDto
     */
    name?: string | null;
}


/**
 * Check if a given object implements the ChangeCategoryDto interface.
 */
export function instanceOfChangeCategoryDto(value: any): value is ChangeCategoryDto {
    return true;
}

export function ChangeCategoryDtoFromJSON(json: any): ChangeCategoryDto {
    return ChangeCategoryDtoFromJSONTyped(json, false);
}

export function ChangeCategoryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeCategoryDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function ChangeCategoryDtoToJSON(value?: ChangeCategoryDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}
