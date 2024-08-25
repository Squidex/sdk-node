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
import type { FieldPropertiesDto } from './FieldPropertiesDto';
import {
    FieldPropertiesDtoFromJSON,
    FieldPropertiesDtoFromJSONTyped,
    FieldPropertiesDtoToJSON,
} from './FieldPropertiesDto';
import type { ArrayCalculatedDefaultValue } from './ArrayCalculatedDefaultValue';
import {
    ArrayCalculatedDefaultValueFromJSON,
    ArrayCalculatedDefaultValueFromJSONTyped,
    ArrayCalculatedDefaultValueToJSON,
} from './ArrayCalculatedDefaultValue';

/**
 * 
 * @export
 * @interface ArrayFieldPropertiesDto
 */
export interface ArrayFieldPropertiesDto extends FieldPropertiesDto {
    /**
     * The minimum allowed items for the field value.
     * @type {number}
     * @memberof ArrayFieldPropertiesDto
     */
    minItems?: number | null;
    /**
     * The maximum allowed items for the field value.
     * @type {number}
     * @memberof ArrayFieldPropertiesDto
     */
    maxItems?: number | null;
    /**
     * 
     * @type {ArrayCalculatedDefaultValue}
     * @memberof ArrayFieldPropertiesDto
     */
    calculatedDefaultValue?: ArrayCalculatedDefaultValue;
    /**
     * The fields that must be unique.
     * @type {Array<string>}
     * @memberof ArrayFieldPropertiesDto
     */
    uniqueFields?: Array<string> | null;
}




/**
 * Check if a given object implements the ArrayFieldPropertiesDto interface.
 */
export function instanceOfArrayFieldPropertiesDto(value: any): value is ArrayFieldPropertiesDto {
    return true;
}

export function ArrayFieldPropertiesDtoFromJSON(json: any): ArrayFieldPropertiesDto {
    return ArrayFieldPropertiesDtoFromJSONTyped(json, false);
}

export function ArrayFieldPropertiesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArrayFieldPropertiesDto {
    if (json == null) {
        return json;
    }
    return {
        ...FieldPropertiesDtoFromJSONTyped(json, ignoreDiscriminator),
        'minItems': json['minItems'] == null ? undefined : json['minItems'],
        'maxItems': json['maxItems'] == null ? undefined : json['maxItems'],
        'calculatedDefaultValue': json['calculatedDefaultValue'] == null ? undefined : ArrayCalculatedDefaultValueFromJSON(json['calculatedDefaultValue']),
        'uniqueFields': json['uniqueFields'] == null ? undefined : json['uniqueFields'],
    };
}

export function ArrayFieldPropertiesDtoToJSON(value?: ArrayFieldPropertiesDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        ...FieldPropertiesDtoToJSON(value, true),
        'minItems': value['minItems'],
        'maxItems': value['maxItems'],
        'calculatedDefaultValue': ArrayCalculatedDefaultValueToJSON(value['calculatedDefaultValue']),
        'uniqueFields': value['uniqueFields'],
    };
}
