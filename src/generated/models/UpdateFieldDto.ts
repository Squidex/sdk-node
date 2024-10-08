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

import type { FieldPropertiesDto } from './FieldPropertiesDto';
import {
    FieldPropertiesDtoFromJSON,
    FieldPropertiesDtoToJSON,
} from './FieldPropertiesDto';

/**
 * 
 * @export
 * @interface UpdateFieldDto
 */
export interface UpdateFieldDto {
    /**
     * 
     * @type {FieldPropertiesDto}
     * @memberof UpdateFieldDto
     */
    properties: FieldPropertiesDto;
}


/**
 * Check if a given object implements the UpdateFieldDto interface.
 */
export function instanceOfUpdateFieldDto(value: any): value is UpdateFieldDto {
    if (!value) {
        return false;
    }
    if (!('properties' in value) || value['properties'] === undefined) return false;
    return true;
}

export function UpdateFieldDtoFromJSON(json: any): UpdateFieldDto {
    return UpdateFieldDtoFromJSONTyped(json, false);
}

export function UpdateFieldDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UpdateFieldDto {
    if (json == null) {
        return json;
    }
    return {
        
        'properties': FieldPropertiesDtoFromJSON(json['properties']),
    };
}

export function UpdateFieldDtoToJSON(value?: UpdateFieldDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'properties': FieldPropertiesDtoToJSON(value['properties']),
    };
}
