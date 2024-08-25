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
 * @interface LogDownloadDto
 */
export interface LogDownloadDto {
    /**
     * The url to download the log.
     * @type {string}
     * @memberof LogDownloadDto
     */
    downloadUrl?: string | null;
}


/**
 * Check if a given object implements the LogDownloadDto interface.
 */
export function instanceOfLogDownloadDto(value: any): value is LogDownloadDto {
    return true;
}

export function LogDownloadDtoFromJSON(json: any): LogDownloadDto {
    return LogDownloadDtoFromJSONTyped(json, false);
}

export function LogDownloadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogDownloadDto {
    if (json == null) {
        return json;
    }
    return {
        
        'downloadUrl': json['downloadUrl'] == null ? undefined : json['downloadUrl'],
    };
}

export function LogDownloadDtoToJSON(value?: LogDownloadDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'downloadUrl': value['downloadUrl'],
    };
}
