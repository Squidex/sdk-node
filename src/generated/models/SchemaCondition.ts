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
 * @interface SchemaCondition
 */
export interface SchemaCondition {
    /**
     * 
     * @type {string}
     * @memberof SchemaCondition
     */
    schemaId: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaCondition
     */
    condition?: string | null;
}


/**
 * Check if a given object implements the SchemaCondition interface.
 */
export function instanceOfSchemaCondition(value: any): value is SchemaCondition {
    if (!('schemaId' in value) || value['schemaId'] === undefined) return false;
    return true;
}

export function SchemaConditionFromJSON(json: any): SchemaCondition {
    return SchemaConditionFromJSONTyped(json, false);
}

export function SchemaConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'schemaId': json['schemaId'],
        'condition': json['condition'] == null ? undefined : json['condition'],
    };
}

export function SchemaConditionToJSON(value?: SchemaCondition | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schemaId': value['schemaId'],
        'condition': value['condition'],
    };
}
