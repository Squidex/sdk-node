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

/**
 * 
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof UserDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The ID of the user.
     * @type {string}
     * @memberof UserDto
     */
    id: string;
    /**
     * The email of the user. Unique value.
     * @type {string}
     * @memberof UserDto
     */
    email: string;
    /**
     * The display name (usually first name and last name) of the user.
     * @type {string}
     * @memberof UserDto
     */
    displayName: string;
    /**
     * Determines if the user is locked.
     * @type {boolean}
     * @memberof UserDto
     */
    isLocked: boolean;
    /**
     * Additional permissions for the user.
     * @type {Array<string>}
     * @memberof UserDto
     */
    permissions: Array<string>;
}

/**
 * Check if a given object implements the UserDto interface.
 */
export function instanceOfUserDto(value: object): value is UserDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('isLocked' in value) || value['isLocked'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    return true;
}

export function UserDtoFromJSON(json: any): UserDto {
    return UserDtoFromJSONTyped(json, false);
}

export function UserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'id': json['id'],
        'email': json['email'],
        'displayName': json['displayName'],
        'isLocked': json['isLocked'],
        'permissions': json['permissions'],
    };
}

export function UserDtoToJSON(value?: UserDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'id': value['id'],
        'email': value['email'],
        'displayName': value['displayName'],
        'isLocked': value['isLocked'],
        'permissions': value['permissions'],
    };
}
