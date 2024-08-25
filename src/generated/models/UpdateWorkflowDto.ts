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
import type { WorkflowStepDto } from './WorkflowStepDto';
import {
    WorkflowStepDtoFromJSON,
    WorkflowStepDtoFromJSONTyped,
    WorkflowStepDtoToJSON,
} from './WorkflowStepDto';

/**
 * 
 * @export
 * @interface UpdateWorkflowDto
 */
export interface UpdateWorkflowDto {
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof UpdateWorkflowDto
     */
    name?: string | null;
    /**
     * The workflow steps.
     * @type {{ [key: string]: WorkflowStepDto; }}
     * @memberof UpdateWorkflowDto
     */
    steps: { [key: string]: WorkflowStepDto; };
    /**
     * The schema ids.
     * @type {Array<string>}
     * @memberof UpdateWorkflowDto
     */
    schemaIds?: Array<string> | null;
    /**
     * The initial step.
     * @type {string}
     * @memberof UpdateWorkflowDto
     */
    initial: string;
}


/**
 * Check if a given object implements the UpdateWorkflowDto interface.
 */
export function instanceOfUpdateWorkflowDto(value: object): value is UpdateWorkflowDto {
    if (!('steps' in value) || value['steps'] === undefined) return false;
    if (!('initial' in value) || value['initial'] === undefined) return false;
    return true;
}

export function UpdateWorkflowDtoFromJSON(json: any): UpdateWorkflowDto {
    return UpdateWorkflowDtoFromJSONTyped(json, false);
}

export function UpdateWorkflowDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateWorkflowDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'steps': (mapValues(json['steps'], WorkflowStepDtoFromJSON)),
        'schemaIds': json['schemaIds'] == null ? undefined : json['schemaIds'],
        'initial': json['initial'],
    };
}

export function UpdateWorkflowDtoToJSON(value?: UpdateWorkflowDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'steps': (mapValues(value['steps'], WorkflowStepDtoToJSON)),
        'schemaIds': value['schemaIds'],
        'initial': value['initial'],
    };
}