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
 * @interface AssetFolderDto
 */
export interface AssetFolderDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof AssetFolderDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The ID of the asset.
     * @type {string}
     * @memberof AssetFolderDto
     */
    id: string;
    /**
     * The ID of the parent folder. Empty for files without parent.
     * @type {string}
     * @memberof AssetFolderDto
     */
    parentId: string;
    /**
     * The folder name.
     * @type {string}
     * @memberof AssetFolderDto
     */
    folderName: string;
    /**
     * The version of the asset folder.
     * @type {number}
     * @memberof AssetFolderDto
     */
    version: number;
}


/**
 * Check if a given object implements the AssetFolderDto interface.
 */
export function instanceOfAssetFolderDto(value: object): value is AssetFolderDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('parentId' in value) || value['parentId'] === undefined) return false;
    if (!('folderName' in value) || value['folderName'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function AssetFolderDtoFromJSON(json: any): AssetFolderDto {
    return AssetFolderDtoFromJSONTyped(json, false);
}

export function AssetFolderDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFolderDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'id': json['id'],
        'parentId': json['parentId'],
        'folderName': json['folderName'],
        'version': json['version'],
    };
}

export function AssetFolderDtoToJSON(value?: AssetFolderDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'id': value['id'],
        'parentId': value['parentId'],
        'folderName': value['folderName'],
        'version': value['version'],
    };
}