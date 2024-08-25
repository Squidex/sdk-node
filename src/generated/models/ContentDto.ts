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
import type { ScheduleJobDto } from './ScheduleJobDto';
import {
    ScheduleJobDtoFromJSON,
    ScheduleJobDtoFromJSONTyped,
    ScheduleJobDtoToJSON,
} from './ScheduleJobDto';
import type { FieldDto } from './FieldDto';
import {
    FieldDtoFromJSON,
    FieldDtoFromJSONTyped,
    FieldDtoToJSON,
} from './FieldDto';

/**
 * 
 * @export
 * @interface ContentDto
 */
export interface ContentDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof ContentDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The if of the content item.
     * @type {string}
     * @memberof ContentDto
     */
    id: string;
    /**
     * The user that has created the content item.
     * @type {string}
     * @memberof ContentDto
     */
    createdBy: string;
    /**
     * The user that has updated the content item.
     * @type {string}
     * @memberof ContentDto
     */
    lastModifiedBy: string;
    /**
     * The data of the content item.
     * @type {any}
     * @memberof ContentDto
     */
    data: any | null;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof ContentDto
     */
    referenceData?: { [key: string]: { [key: string]: any; }; };
    /**
     * The date and time when the content item has been created.
     * @type {Date}
     * @memberof ContentDto
     */
    created: Date;
    /**
     * The date and time when the content item has been modified last.
     * @type {Date}
     * @memberof ContentDto
     */
    lastModified: Date;
    /**
     * The status of the content.
     * @type {string}
     * @memberof ContentDto
     */
    status: string;
    /**
     * The new status of the content.
     * @type {string}
     * @memberof ContentDto
     */
    newStatus?: string | null;
    /**
     * The color of the status.
     * @type {string}
     * @memberof ContentDto
     */
    statusColor: string;
    /**
     * The color of the new status.
     * @type {string}
     * @memberof ContentDto
     */
    newStatusColor?: string | null;
    /**
     * The UI token.
     * @type {string}
     * @memberof ContentDto
     */
    editToken?: string | null;
    /**
     * 
     * @type {ScheduleJobDto}
     * @memberof ContentDto
     */
    scheduleJob?: ScheduleJobDto;
    /**
     * The ID of the schema.
     * @type {string}
     * @memberof ContentDto
     */
    schemaId: string;
    /**
     * The name of the schema.
     * @type {string}
     * @memberof ContentDto
     */
    schemaName?: string | null;
    /**
     * The display name of the schema.
     * @type {string}
     * @memberof ContentDto
     */
    schemaDisplayName?: string | null;
    /**
     * The reference fields.
     * @type {Array<FieldDto>}
     * @memberof ContentDto
     */
    referenceFields?: Array<FieldDto> | null;
    /**
     * Indicates whether the content is deleted.
     * @type {boolean}
     * @memberof ContentDto
     */
    isDeleted: boolean;
    /**
     * The version of the content.
     * @type {number}
     * @memberof ContentDto
     */
    version: number;
}


/**
 * Check if a given object implements the ContentDto interface.
 */
export function instanceOfContentDto(value: object): value is ContentDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('lastModifiedBy' in value) || value['lastModifiedBy'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('lastModified' in value) || value['lastModified'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('statusColor' in value) || value['statusColor'] === undefined) return false;
    if (!('schemaId' in value) || value['schemaId'] === undefined) return false;
    if (!('isDeleted' in value) || value['isDeleted'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ContentDtoFromJSON(json: any): ContentDto {
    return ContentDtoFromJSONTyped(json, false);
}

export function ContentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'id': json['id'],
        'createdBy': json['createdBy'],
        'lastModifiedBy': json['lastModifiedBy'],
        'data': json['data'],
        'referenceData': json['referenceData'] == null ? undefined : json['referenceData'],
        'created': (new Date(json['created'])),
        'lastModified': (new Date(json['lastModified'])),
        'status': json['status'],
        'newStatus': json['newStatus'] == null ? undefined : json['newStatus'],
        'statusColor': json['statusColor'],
        'newStatusColor': json['newStatusColor'] == null ? undefined : json['newStatusColor'],
        'editToken': json['editToken'] == null ? undefined : json['editToken'],
        'scheduleJob': json['scheduleJob'] == null ? undefined : ScheduleJobDtoFromJSON(json['scheduleJob']),
        'schemaId': json['schemaId'],
        'schemaName': json['schemaName'] == null ? undefined : json['schemaName'],
        'schemaDisplayName': json['schemaDisplayName'] == null ? undefined : json['schemaDisplayName'],
        'referenceFields': json['referenceFields'] == null ? undefined : ((json['referenceFields'] as Array<any>).map(FieldDtoFromJSON)),
        'isDeleted': json['isDeleted'],
        'version': json['version'],
    };
}

export function ContentDtoToJSON(value?: ContentDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'id': value['id'],
        'createdBy': value['createdBy'],
        'lastModifiedBy': value['lastModifiedBy'],
        'data': value['data'],
        'referenceData': value['referenceData'],
        'created': ((value['created']).toISOString()),
        'lastModified': ((value['lastModified']).toISOString()),
        'status': value['status'],
        'newStatus': value['newStatus'],
        'statusColor': value['statusColor'],
        'newStatusColor': value['newStatusColor'],
        'editToken': value['editToken'],
        'scheduleJob': ScheduleJobDtoToJSON(value['scheduleJob']),
        'schemaId': value['schemaId'],
        'schemaName': value['schemaName'],
        'schemaDisplayName': value['schemaDisplayName'],
        'referenceFields': value['referenceFields'] == null ? undefined : ((value['referenceFields'] as Array<any>).map(FieldDtoToJSON)),
        'isDeleted': value['isDeleted'],
        'version': value['version'],
    };
}