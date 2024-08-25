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
import type { SortOrder } from './SortOrder';
import {
    SortOrderFromJSON,
    SortOrderFromJSONTyped,
    SortOrderToJSON,
} from './SortOrder';

/**
 * 
 * @export
 * @interface SortNode
 */
export interface SortNode {
    /**
     * 
     * @type {string}
     * @memberof SortNode
     */
    path: string;
    /**
     * 
     * @type {SortOrder}
     * @memberof SortNode
     */
    order: SortOrder;
}




/**
 * Check if a given object implements the SortNode interface.
 */
export function instanceOfSortNode(value: object): value is SortNode {
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('order' in value) || value['order'] === undefined) return false;
    return true;
}

export function SortNodeFromJSON(json: any): SortNode {
    return SortNodeFromJSONTyped(json, false);
}

export function SortNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortNode {
    if (json == null) {
        return json;
    }
    return {
        
        'path': json['path'],
        'order': SortOrderFromJSON(json['order']),
    };
}

export function SortNodeToJSON(value?: SortNode | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'path': value['path'],
        'order': SortOrderToJSON(value['order']),
    };
}