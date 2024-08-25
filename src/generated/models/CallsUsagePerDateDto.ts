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
 * @interface CallsUsagePerDateDto
 */
export interface CallsUsagePerDateDto {
    /**
     * The date when the usage was tracked.
     * @type {Date}
     * @memberof CallsUsagePerDateDto
     */
    date: Date;
    /**
     * The total number of API calls.
     * @type {number}
     * @memberof CallsUsagePerDateDto
     */
    totalCalls: number;
    /**
     * The total number of bytes transferred.
     * @type {number}
     * @memberof CallsUsagePerDateDto
     */
    totalBytes: number;
    /**
     * The average duration in milliseconds.
     * @type {number}
     * @memberof CallsUsagePerDateDto
     */
    averageElapsedMs: number;
}


/**
 * Check if a given object implements the CallsUsagePerDateDto interface.
 */
export function instanceOfCallsUsagePerDateDto(value: object): value is CallsUsagePerDateDto {
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('totalCalls' in value) || value['totalCalls'] === undefined) return false;
    if (!('totalBytes' in value) || value['totalBytes'] === undefined) return false;
    if (!('averageElapsedMs' in value) || value['averageElapsedMs'] === undefined) return false;
    return true;
}

export function CallsUsagePerDateDtoFromJSON(json: any): CallsUsagePerDateDto {
    return CallsUsagePerDateDtoFromJSONTyped(json, false);
}

export function CallsUsagePerDateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallsUsagePerDateDto {
    if (json == null) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
        'totalCalls': json['totalCalls'],
        'totalBytes': json['totalBytes'],
        'averageElapsedMs': json['averageElapsedMs'],
    };
}

export function CallsUsagePerDateDtoToJSON(value?: CallsUsagePerDateDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date': ((value['date']).toISOString().substring(0,10)),
        'totalCalls': value['totalCalls'],
        'totalBytes': value['totalBytes'],
        'averageElapsedMs': value['averageElapsedMs'],
    };
}