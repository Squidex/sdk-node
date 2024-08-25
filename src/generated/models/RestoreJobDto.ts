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
import type { JobStatus } from './JobStatus';
import {
    JobStatusFromJSON,
    JobStatusFromJSONTyped,
    JobStatusToJSON,
} from './JobStatus';

/**
 * 
 * @export
 * @interface RestoreJobDto
 */
export interface RestoreJobDto {
    /**
     * The uri to load from.
     * @type {string}
     * @memberof RestoreJobDto
     */
    url: string;
    /**
     * The status log.
     * @type {Array<string>}
     * @memberof RestoreJobDto
     */
    log: Array<string>;
    /**
     * The time when the job has been started.
     * @type {Date}
     * @memberof RestoreJobDto
     */
    started: Date;
    /**
     * The time when the job has been stopped.
     * @type {Date}
     * @memberof RestoreJobDto
     */
    stopped?: Date | null;
    /**
     * 
     * @type {JobStatus}
     * @memberof RestoreJobDto
     */
    status: JobStatus;
}




/**
 * Check if a given object implements the RestoreJobDto interface.
 */
export function instanceOfRestoreJobDto(value: object): value is RestoreJobDto {
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('started' in value) || value['started'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function RestoreJobDtoFromJSON(json: any): RestoreJobDto {
    return RestoreJobDtoFromJSONTyped(json, false);
}

export function RestoreJobDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestoreJobDto {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
        'log': json['log'],
        'started': (new Date(json['started'])),
        'stopped': json['stopped'] == null ? undefined : (new Date(json['stopped'])),
        'status': JobStatusFromJSON(json['status']),
    };
}

export function RestoreJobDtoToJSON(value?: RestoreJobDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'log': value['log'],
        'started': ((value['started']).toISOString()),
        'stopped': value['stopped'] == null ? undefined : ((value['stopped'] as any).toISOString()),
        'status': JobStatusToJSON(value['status']),
    };
}