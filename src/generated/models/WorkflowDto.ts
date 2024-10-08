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
    ResourceLinkToJSON,
} from './ResourceLink';
import type { WorkflowStepDto } from './WorkflowStepDto';
import {
    WorkflowStepDtoFromJSON,
    WorkflowStepDtoToJSON,
} from './WorkflowStepDto';

/**
 * 
 * @export
 * @interface WorkflowDto
 */
export interface WorkflowDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof WorkflowDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The workflow id.
     * @type {string}
     * @memberof WorkflowDto
     */
    id: string;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof WorkflowDto
     */
    name?: string | null;
    /**
     * The workflow steps.
     * @type {{ [key: string]: WorkflowStepDto; }}
     * @memberof WorkflowDto
     */
    steps: { [key: string]: WorkflowStepDto; };
    /**
     * The schema ids.
     * @type {Array<string>}
     * @memberof WorkflowDto
     */
    schemaIds?: Array<string> | null;
    /**
     * The initial step.
     * @type {string}
     * @memberof WorkflowDto
     */
    initial: string;
}


/**
 * Check if a given object implements the WorkflowDto interface.
 */
export function instanceOfWorkflowDto(value: any): value is WorkflowDto {
    if (!value) {
        return false;
    }
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('steps' in value) || value['steps'] === undefined) return false;
    if (!('initial' in value) || value['initial'] === undefined) return false;
    return true;
}

export function WorkflowDtoFromJSON(json: any): WorkflowDto {
    return WorkflowDtoFromJSONTyped(json, false);
}

export function WorkflowDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): WorkflowDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'steps': (mapValues(json['steps'], WorkflowStepDtoFromJSON)),
        'schemaIds': json['schemaIds'] == null ? undefined : json['schemaIds'],
        'initial': json['initial'],
    };
}

export function WorkflowDtoToJSON(value?: WorkflowDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], x => ResourceLinkToJSON(x))),
        'id': value['id'],
        'name': value['name'],
        'steps': (mapValues(value['steps'], x => WorkflowStepDtoToJSON(x))),
        'schemaIds': value['schemaIds'],
        'initial': value['initial'],
    };
}
