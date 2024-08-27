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
import type { WorkflowDto } from './WorkflowDto';
import {
    WorkflowDtoFromJSON,
    WorkflowDtoToJSON,
} from './WorkflowDto';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkToJSON,
} from './ResourceLink';

/**
 * 
 * @export
 * @interface WorkflowsDto
 */
export interface WorkflowsDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof WorkflowsDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The workflow.
     * @type {Array<WorkflowDto>}
     * @memberof WorkflowsDto
     */
    items: Array<WorkflowDto>;
    /**
     * The errros that should be fixed.
     * @type {Array<string>}
     * @memberof WorkflowsDto
     */
    errors: Array<string>;
}


/**
 * Check if a given object implements the WorkflowsDto interface.
 */
export function instanceOfWorkflowsDto(value: any): value is WorkflowsDto {
    if (!value) {
        return false;
    }
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('errors' in value) || value['errors'] === undefined) return false;
    return true;
}

export function WorkflowsDtoFromJSON(json: any): WorkflowsDto {
    return WorkflowsDtoFromJSONTyped(json, false);
}

export function WorkflowsDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): WorkflowsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'items': ((json['items'] as Array<any>).map(WorkflowDtoFromJSON)),
        'errors': json['errors'],
    };
}

export function WorkflowsDtoToJSON(value?: WorkflowsDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], x => ResourceLinkToJSON(x))),
        'items': ((value['items'] as Array<any>).map(x => WorkflowDtoToJSON(x))),
        'errors': value['errors'],
    };
}
