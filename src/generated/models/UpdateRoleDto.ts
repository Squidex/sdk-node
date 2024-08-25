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
 * @interface UpdateRoleDto
 */
export interface UpdateRoleDto {
    /**
     * Associated list of permissions.
     * @type {Array<string>}
     * @memberof UpdateRoleDto
     */
    permissions: Array<string>;
    /**
     * Associated list of UI properties.
     * @type {{ [key: string]: any; }}
     * @memberof UpdateRoleDto
     */
    properties?: { [key: string]: any; };
}


/**
 * Check if a given object implements the UpdateRoleDto interface.
 */
export function instanceOfUpdateRoleDto(value: any): value is UpdateRoleDto {
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    return true;
}

export function UpdateRoleDtoFromJSON(json: any): UpdateRoleDto {
    return UpdateRoleDtoFromJSONTyped(json, false);
}

export function UpdateRoleDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRoleDto {
    if (json == null) {
        return json;
    }
    return {
        
        'permissions': json['permissions'],
        'properties': json['properties'] == null ? undefined : json['properties'],
    };
}

export function UpdateRoleDtoToJSON(value?: UpdateRoleDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'permissions': value['permissions'],
        'properties': value['properties'],
    };
}
