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
 * @interface ErrorDto
 */
export interface ErrorDto {
    /**
     * Error message.
     * @type {string}
     * @memberof ErrorDto
     */
    message: string;
    /**
     * The error code.
     * @type {string}
     * @memberof ErrorDto
     */
    errorCode?: string | null;
    /**
     * The optional trace id.
     * @type {string}
     * @memberof ErrorDto
     */
    traceId?: string | null;
    /**
     * Link to the error details.
     * @type {string}
     * @memberof ErrorDto
     */
    type?: string | null;
    /**
     * Detailed error messages.
     * @type {Array<string>}
     * @memberof ErrorDto
     */
    details?: Array<string> | null;
    /**
     * Status code of the http response.
     * @type {number}
     * @memberof ErrorDto
     */
    statusCode: number;
}


/**
 * Check if a given object implements the ErrorDto interface.
 */
export function instanceOfErrorDto(value: any): value is ErrorDto {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function ErrorDtoFromJSON(json: any): ErrorDto {
    return ErrorDtoFromJSONTyped(json, false);
}

export function ErrorDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDto {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
        'traceId': json['traceId'] == null ? undefined : json['traceId'],
        'type': json['type'] == null ? undefined : json['type'],
        'details': json['details'] == null ? undefined : json['details'],
        'statusCode': json['statusCode'],
    };
}

export function ErrorDtoToJSON(value?: ErrorDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
        'errorCode': value['errorCode'],
        'traceId': value['traceId'],
        'type': value['type'],
        'details': value['details'],
        'statusCode': value['statusCode'],
    };
}
