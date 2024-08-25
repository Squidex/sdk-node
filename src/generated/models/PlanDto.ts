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
 * @interface PlanDto
 */
export interface PlanDto {
    /**
     * The ID of the plan.
     * @type {string}
     * @memberof PlanDto
     */
    id: string;
    /**
     * The name of the plan.
     * @type {string}
     * @memberof PlanDto
     */
    name: string;
    /**
     * The monthly costs of the plan.
     * @type {string}
     * @memberof PlanDto
     */
    costs: string;
    /**
     * An optional confirm text for the monthly subscription.
     * @type {string}
     * @memberof PlanDto
     */
    confirmText?: string | null;
    /**
     * An optional confirm text for the yearly subscription.
     * @type {string}
     * @memberof PlanDto
     */
    yearlyConfirmText?: string | null;
    /**
     * The yearly costs of the plan.
     * @type {string}
     * @memberof PlanDto
     */
    yearlyCosts?: string | null;
    /**
     * The yearly ID of the plan.
     * @type {string}
     * @memberof PlanDto
     */
    yearlyId?: string | null;
    /**
     * The maximum number of API traffic.
     * @type {number}
     * @memberof PlanDto
     */
    maxApiBytes: number;
    /**
     * The maximum number of API calls.
     * @type {number}
     * @memberof PlanDto
     */
    maxApiCalls: number;
    /**
     * The maximum allowed asset size.
     * @type {number}
     * @memberof PlanDto
     */
    maxAssetSize: number;
    /**
     * The maximum number of contributors.
     * @type {number}
     * @memberof PlanDto
     */
    maxContributors: number;
}


/**
 * Check if a given object implements the PlanDto interface.
 */
export function instanceOfPlanDto(value: object): value is PlanDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('costs' in value) || value['costs'] === undefined) return false;
    if (!('maxApiBytes' in value) || value['maxApiBytes'] === undefined) return false;
    if (!('maxApiCalls' in value) || value['maxApiCalls'] === undefined) return false;
    if (!('maxAssetSize' in value) || value['maxAssetSize'] === undefined) return false;
    if (!('maxContributors' in value) || value['maxContributors'] === undefined) return false;
    return true;
}

export function PlanDtoFromJSON(json: any): PlanDto {
    return PlanDtoFromJSONTyped(json, false);
}

export function PlanDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'costs': json['costs'],
        'confirmText': json['confirmText'] == null ? undefined : json['confirmText'],
        'yearlyConfirmText': json['yearlyConfirmText'] == null ? undefined : json['yearlyConfirmText'],
        'yearlyCosts': json['yearlyCosts'] == null ? undefined : json['yearlyCosts'],
        'yearlyId': json['yearlyId'] == null ? undefined : json['yearlyId'],
        'maxApiBytes': json['maxApiBytes'],
        'maxApiCalls': json['maxApiCalls'],
        'maxAssetSize': json['maxAssetSize'],
        'maxContributors': json['maxContributors'],
    };
}

export function PlanDtoToJSON(value?: PlanDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'costs': value['costs'],
        'confirmText': value['confirmText'],
        'yearlyConfirmText': value['yearlyConfirmText'],
        'yearlyCosts': value['yearlyCosts'],
        'yearlyId': value['yearlyId'],
        'maxApiBytes': value['maxApiBytes'],
        'maxApiCalls': value['maxApiCalls'],
        'maxAssetSize': value['maxAssetSize'],
        'maxContributors': value['maxContributors'],
    };
}