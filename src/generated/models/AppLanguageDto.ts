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
 * @interface AppLanguageDto
 */
export interface AppLanguageDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof AppLanguageDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The iso code of the language.
     * @type {string}
     * @memberof AppLanguageDto
     */
    iso2Code: string;
    /**
     * The english name of the language.
     * @type {string}
     * @memberof AppLanguageDto
     */
    englishName: string;
    /**
     * The fallback languages.
     * @type {Array<string>}
     * @memberof AppLanguageDto
     */
    fallback: Array<string>;
    /**
     * Indicates if the language is the master language.
     * @type {boolean}
     * @memberof AppLanguageDto
     */
    isMaster: boolean;
    /**
     * Indicates if the language is optional.
     * @type {boolean}
     * @memberof AppLanguageDto
     */
    isOptional: boolean;
}


/**
 * Check if a given object implements the AppLanguageDto interface.
 */
export function instanceOfAppLanguageDto(value: any): value is AppLanguageDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('iso2Code' in value) || value['iso2Code'] === undefined) return false;
    if (!('englishName' in value) || value['englishName'] === undefined) return false;
    if (!('fallback' in value) || value['fallback'] === undefined) return false;
    if (!('isMaster' in value) || value['isMaster'] === undefined) return false;
    if (!('isOptional' in value) || value['isOptional'] === undefined) return false;
    return true;
}

export function AppLanguageDtoFromJSON(json: any): AppLanguageDto {
    return AppLanguageDtoFromJSONTyped(json, false);
}

export function AppLanguageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppLanguageDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'iso2Code': json['iso2Code'],
        'englishName': json['englishName'],
        'fallback': json['fallback'],
        'isMaster': json['isMaster'],
        'isOptional': json['isOptional'],
    };
}

export function AppLanguageDtoToJSON(value?: AppLanguageDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], x => ResourceLinkToJSON(x))),
        'iso2Code': value['iso2Code'],
        'englishName': value['englishName'],
        'fallback': value['fallback'],
        'isMaster': value['isMaster'],
        'isOptional': value['isOptional'],
    };
}
