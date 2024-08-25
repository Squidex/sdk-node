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
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';
import type { UserDto } from './UserDto';
import {
    UserDtoFromJSON,
    UserDtoFromJSONTyped,
    UserDtoToJSON,
} from './UserDto';

/**
 * 
 * @export
 * @interface UsersDto
 */
export interface UsersDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof UsersDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The total number of users.
     * @type {number}
     * @memberof UsersDto
     */
    total: number;
    /**
     * The users.
     * @type {Array<UserDto>}
     * @memberof UsersDto
     */
    items: Array<UserDto>;
}

/**
 * Check if a given object implements the UsersDto interface.
 */
export function instanceOfUsersDto(value: object): value is UsersDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function UsersDtoFromJSON(json: any): UsersDto {
    return UsersDtoFromJSONTyped(json, false);
}

export function UsersDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(UserDtoFromJSON)),
    };
}

export function UsersDtoToJSON(value?: UsersDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(UserDtoToJSON)),
    };
}
