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
import type { BackupJobDto } from './BackupJobDto';
import {
    BackupJobDtoFromJSON,
    BackupJobDtoFromJSONTyped,
    BackupJobDtoToJSON,
} from './BackupJobDto';

/**
 * 
 * @export
 * @interface BackupJobsDto
 */
export interface BackupJobsDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof BackupJobsDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The backups.
     * @type {Array<BackupJobDto>}
     * @memberof BackupJobsDto
     */
    items: Array<BackupJobDto>;
}


/**
 * Check if a given object implements the BackupJobsDto interface.
 */
export function instanceOfBackupJobsDto(value: any): value is BackupJobsDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function BackupJobsDtoFromJSON(json: any): BackupJobsDto {
    return BackupJobsDtoFromJSONTyped(json, false);
}

export function BackupJobsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackupJobsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'items': ((json['items'] as Array<any>).map(BackupJobDtoFromJSON)),
    };
}

export function BackupJobsDtoToJSON(value?: BackupJobsDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], x => ResourceLinkToJSON(x))),
        'items': ((value['items'] as Array<any>).map(x => BackupJobDtoToJSON(x))),
    };
}
