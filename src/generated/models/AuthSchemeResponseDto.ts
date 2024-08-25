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
import type { AuthSchemeDto } from './AuthSchemeDto';
import {
    AuthSchemeDtoFromJSON,
    AuthSchemeDtoFromJSONTyped,
    AuthSchemeDtoToJSON,
} from './AuthSchemeDto';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';

/**
 * 
 * @export
 * @interface AuthSchemeResponseDto
 */
export interface AuthSchemeResponseDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof AuthSchemeResponseDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * 
     * @type {AuthSchemeDto}
     * @memberof AuthSchemeResponseDto
     */
    scheme?: AuthSchemeDto;
}


/**
 * Check if a given object implements the AuthSchemeResponseDto interface.
 */
export function instanceOfAuthSchemeResponseDto(value: any): value is AuthSchemeResponseDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AuthSchemeResponseDtoFromJSON(json: any): AuthSchemeResponseDto {
    return AuthSchemeResponseDtoFromJSONTyped(json, false);
}

export function AuthSchemeResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthSchemeResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'scheme': json['scheme'] == null ? undefined : AuthSchemeDtoFromJSON(json['scheme']),
    };
}

export function AuthSchemeResponseDtoToJSON(value?: AuthSchemeResponseDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], x => ResourceLinkToJSON(x))),
        'scheme': AuthSchemeDtoToJSON(value['scheme']),
    };
}
