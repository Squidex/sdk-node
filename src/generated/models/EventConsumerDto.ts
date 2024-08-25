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
 * @interface EventConsumerDto
 */
export interface EventConsumerDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof EventConsumerDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * Indicates if the event consumer has been started.
     * @type {boolean}
     * @memberof EventConsumerDto
     */
    isStopped: boolean;
    /**
     * Indicates if the event consumer is resetting at the moment.
     * @type {boolean}
     * @memberof EventConsumerDto
     */
    isResetting: boolean;
    /**
     * The number of handled events.
     * @type {number}
     * @memberof EventConsumerDto
     */
    count: number;
    /**
     * The name of the event consumer.
     * @type {string}
     * @memberof EventConsumerDto
     */
    name: string;
    /**
     * The error details if the event consumer has been stopped after a failure.
     * @type {string}
     * @memberof EventConsumerDto
     */
    error?: string | null;
    /**
     * The position within the vent stream.
     * @type {string}
     * @memberof EventConsumerDto
     */
    position?: string | null;
}


/**
 * Check if a given object implements the EventConsumerDto interface.
 */
export function instanceOfEventConsumerDto(value: any): value is EventConsumerDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('isStopped' in value) || value['isStopped'] === undefined) return false;
    if (!('isResetting' in value) || value['isResetting'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function EventConsumerDtoFromJSON(json: any): EventConsumerDto {
    return EventConsumerDtoFromJSONTyped(json, false);
}

export function EventConsumerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventConsumerDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'isStopped': json['isStopped'],
        'isResetting': json['isResetting'],
        'count': json['count'],
        'name': json['name'],
        'error': json['error'] == null ? undefined : json['error'],
        'position': json['position'] == null ? undefined : json['position'],
    };
}

export function EventConsumerDtoToJSON(value?: EventConsumerDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], x => ResourceLinkToJSON(x))),
        'isStopped': value['isStopped'],
        'isResetting': value['isResetting'],
        'count': value['count'],
        'name': value['name'],
        'error': value['error'],
        'position': value['position'],
    };
}
