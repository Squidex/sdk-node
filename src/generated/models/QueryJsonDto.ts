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

import type { SortNode } from './SortNode';
import {
    SortNodeFromJSON,
    SortNodeToJSON,
} from './SortNode';

/**
 * 
 * @export
 * @interface QueryJsonDto
 */
export interface QueryJsonDto {
    /**
     * 
     * @type {any}
     * @memberof QueryJsonDto
     */
    filter?: any | null;
    /**
     * 
     * @type {string}
     * @memberof QueryJsonDto
     */
    fullText?: string | null;
    /**
     * 
     * @type {number}
     * @memberof QueryJsonDto
     */
    skip: number;
    /**
     * 
     * @type {number}
     * @memberof QueryJsonDto
     */
    take: number;
    /**
     * 
     * @type {number}
     * @memberof QueryJsonDto
     */
    random: number;
    /**
     * 
     * @type {number}
     * @memberof QueryJsonDto
     */
    top: number;
    /**
     * 
     * @type {Array<SortNode>}
     * @memberof QueryJsonDto
     */
    sort?: Array<SortNode> | null;
}


/**
 * Check if a given object implements the QueryJsonDto interface.
 */
export function instanceOfQueryJsonDto(value: any): value is QueryJsonDto {
    if (!value) {
        return false;
    }
    if (!('skip' in value) || value['skip'] === undefined) return false;
    if (!('take' in value) || value['take'] === undefined) return false;
    if (!('random' in value) || value['random'] === undefined) return false;
    if (!('top' in value) || value['top'] === undefined) return false;
    return true;
}

export function QueryJsonDtoFromJSON(json: any): QueryJsonDto {
    return QueryJsonDtoFromJSONTyped(json, false);
}

export function QueryJsonDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): QueryJsonDto {
    if (json == null) {
        return json;
    }
    return {
        
        'filter': json['filter'] == null ? undefined : json['filter'],
        'fullText': json['fullText'] == null ? undefined : json['fullText'],
        'skip': json['skip'],
        'take': json['take'],
        'random': json['random'],
        'top': json['top'],
        'sort': json['sort'] == null ? undefined : ((json['sort'] as Array<any>).map(SortNodeFromJSON)),
    };
}

export function QueryJsonDtoToJSON(value?: QueryJsonDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'filter': value['filter'],
        'fullText': value['fullText'],
        'skip': value['skip'],
        'take': value['take'],
        'random': value['random'],
        'top': value['top'],
        'sort': value['sort'] == null ? undefined : ((value['sort'] as Array<any>).map(x => SortNodeToJSON(x))),
    };
}
