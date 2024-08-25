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
 * @interface QueryDto
 */
export interface QueryDto {
    /**
     * The optional list of ids to query.
     * @type {Array<string>}
     * @memberof QueryDto
     */
    ids?: Array<string> | null;
    /**
     * The optional odata query.
     * @type {string}
     * @memberof QueryDto
     */
    oData?: string | null;
    /**
     * The optional json query.
     * @type {any}
     * @memberof QueryDto
     */
    q?: any | null;
    /**
     * The parent id (for assets).
     * @type {string}
     * @memberof QueryDto
     */
    parentId?: string | null;
}


/**
 * Check if a given object implements the QueryDto interface.
 */
export function instanceOfQueryDto(value: object): value is QueryDto {
    return true;
}

export function QueryDtoFromJSON(json: any): QueryDto {
    return QueryDtoFromJSONTyped(json, false);
}

export function QueryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryDto {
    if (json == null) {
        return json;
    }
    return {
        
        'ids': json['ids'] == null ? undefined : json['ids'],
        'oData': json['oData'] == null ? undefined : json['oData'],
        'q': json['q'] == null ? undefined : json['q'],
        'parentId': json['parentId'] == null ? undefined : json['parentId'],
    };
}

export function QueryDtoToJSON(value?: QueryDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ids': value['ids'],
        'oData': value['oData'],
        'q': value['q'],
        'parentId': value['parentId'],
    };
}