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
import type { RoleDto } from './RoleDto';
import {
    RoleDtoFromJSON,
    RoleDtoFromJSONTyped,
    RoleDtoToJSON,
} from './RoleDto';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';

/**
 * 
 * @export
 * @interface RolesDto
 */
export interface RolesDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof RolesDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The roles.
     * @type {Array<RoleDto>}
     * @memberof RolesDto
     */
    items: Array<RoleDto>;
}


/**
 * Check if a given object implements the RolesDto interface.
 */
export function instanceOfRolesDto(value: object): value is RolesDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function RolesDtoFromJSON(json: any): RolesDto {
    return RolesDtoFromJSONTyped(json, false);
}

export function RolesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RolesDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'items': ((json['items'] as Array<any>).map(RoleDtoFromJSON)),
    };
}

export function RolesDtoToJSON(value?: RolesDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'items': ((value['items'] as Array<any>).map(RoleDtoToJSON)),
    };
}