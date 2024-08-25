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
 * @interface ScheduleJobDto
 */
export interface ScheduleJobDto {
    /**
     * The ID of the schedule job.
     * @type {string}
     * @memberof ScheduleJobDto
     */
    id: string;
    /**
     * The new status.
     * @type {string}
     * @memberof ScheduleJobDto
     */
    status: string;
    /**
     * The target date and time when the content should be scheduled.
     * @type {Date}
     * @memberof ScheduleJobDto
     */
    dueTime: Date;
    /**
     * The color of the scheduled status.
     * @type {string}
     * @memberof ScheduleJobDto
     */
    color: string;
    /**
     * The user who schedule the content.
     * @type {string}
     * @memberof ScheduleJobDto
     */
    scheduledBy: string;
}

/**
 * Check if a given object implements the ScheduleJobDto interface.
 */
export function instanceOfScheduleJobDto(value: object): value is ScheduleJobDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('dueTime' in value) || value['dueTime'] === undefined) return false;
    if (!('color' in value) || value['color'] === undefined) return false;
    if (!('scheduledBy' in value) || value['scheduledBy'] === undefined) return false;
    return true;
}

export function ScheduleJobDtoFromJSON(json: any): ScheduleJobDto {
    return ScheduleJobDtoFromJSONTyped(json, false);
}

export function ScheduleJobDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleJobDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'status': json['status'],
        'dueTime': (new Date(json['dueTime'])),
        'color': json['color'],
        'scheduledBy': json['scheduledBy'],
    };
}

export function ScheduleJobDtoToJSON(value?: ScheduleJobDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'status': value['status'],
        'dueTime': ((value['dueTime']).toISOString()),
        'color': value['color'],
        'scheduledBy': value['scheduledBy'],
    };
}
