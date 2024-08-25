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
import type { TemplateDto } from './TemplateDto';
import {
    TemplateDtoFromJSON,
    TemplateDtoFromJSONTyped,
    TemplateDtoToJSON,
} from './TemplateDto';

/**
 * 
 * @export
 * @interface TemplatesDto
 */
export interface TemplatesDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof TemplatesDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The event consumers.
     * @type {Array<TemplateDto>}
     * @memberof TemplatesDto
     */
    items: Array<TemplateDto>;
}

/**
 * Check if a given object implements the TemplatesDto interface.
 */
export function instanceOfTemplatesDto(value: object): value is TemplatesDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function TemplatesDtoFromJSON(json: any): TemplatesDto {
    return TemplatesDtoFromJSONTyped(json, false);
}

export function TemplatesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplatesDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'items': ((json['items'] as Array<any>).map(TemplateDtoFromJSON)),
    };
}

export function TemplatesDtoToJSON(value?: TemplatesDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'items': ((value['items'] as Array<any>).map(TemplateDtoToJSON)),
    };
}
