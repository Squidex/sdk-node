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
import type { AssetMeta } from './AssetMeta';
import {
    AssetMetaFromJSON,
    AssetMetaFromJSONTyped,
    AssetMetaToJSON,
} from './AssetMeta';
import type { AssetType } from './AssetType';
import {
    AssetTypeFromJSON,
    AssetTypeFromJSONTyped,
    AssetTypeToJSON,
} from './AssetType';
import type { ResourceLink } from './ResourceLink';
import {
    ResourceLinkFromJSON,
    ResourceLinkFromJSONTyped,
    ResourceLinkToJSON,
} from './ResourceLink';

/**
 * 
 * @export
 * @interface AssetDto
 */
export interface AssetDto {
    /**
     * The links.
     * @type {{ [key: string]: ResourceLink; }}
     * @memberof AssetDto
     */
    links: { [key: string]: ResourceLink; };
    /**
     * The ID of the asset.
     * @type {string}
     * @memberof AssetDto
     */
    id: string;
    /**
     * The ID of the parent folder. Empty for files without parent.
     * @type {string}
     * @memberof AssetDto
     */
    parentId: string;
    /**
     * The file name.
     * @type {string}
     * @memberof AssetDto
     */
    fileName: string;
    /**
     * The file hash.
     * @type {string}
     * @memberof AssetDto
     */
    fileHash?: string | null;
    /**
     * True, when the asset is not public.
     * @type {boolean}
     * @memberof AssetDto
     */
    isProtected: boolean;
    /**
     * The slug.
     * @type {string}
     * @memberof AssetDto
     */
    slug: string;
    /**
     * The mime type.
     * @type {string}
     * @memberof AssetDto
     */
    mimeType: string;
    /**
     * The file type.
     * @type {string}
     * @memberof AssetDto
     */
    fileType: string;
    /**
     * The formatted text representation of the metadata.
     * @type {string}
     * @memberof AssetDto
     */
    metadataText: string;
    /**
     * The UI token.
     * @type {string}
     * @memberof AssetDto
     */
    editToken?: string | null;
    /**
     * The asset metadata.
     * @type {{ [key: string]: any; }}
     * @memberof AssetDto
     */
    metadata: { [key: string]: any; };
    /**
     * The asset tags.
     * @type {Array<string>}
     * @memberof AssetDto
     */
    tags?: Array<string> | null;
    /**
     * The size of the file in bytes.
     * @type {number}
     * @memberof AssetDto
     */
    fileSize: number;
    /**
     * The version of the file.
     * @type {number}
     * @memberof AssetDto
     */
    fileVersion: number;
    /**
     * 
     * @type {AssetType}
     * @memberof AssetDto
     */
    type: AssetType;
    /**
     * The user that has created the schema.
     * @type {string}
     * @memberof AssetDto
     */
    createdBy: string;
    /**
     * The user that has updated the asset.
     * @type {string}
     * @memberof AssetDto
     */
    lastModifiedBy: string;
    /**
     * The date and time when the asset has been created.
     * @type {Date}
     * @memberof AssetDto
     */
    created: Date;
    /**
     * The date and time when the asset has been modified last.
     * @type {Date}
     * @memberof AssetDto
     */
    lastModified: Date;
    /**
     * The version of the asset.
     * @type {number}
     * @memberof AssetDto
     */
    version: number;
    /**
     * 
     * @type {AssetMeta}
     * @memberof AssetDto
     */
    meta?: AssetMeta;
    /**
     * Determines of the created file is an image.
     * @type {boolean}
     * @memberof AssetDto
     * @deprecated
     */
    isImage: boolean;
    /**
     * The width of the image in pixels if the asset is an image.
     * @type {number}
     * @memberof AssetDto
     * @deprecated
     */
    pixelWidth?: number | null;
    /**
     * The height of the image in pixels if the asset is an image.
     * @type {number}
     * @memberof AssetDto
     * @deprecated
     */
    pixelHeight?: number | null;
}




/**
 * Check if a given object implements the AssetDto interface.
 */
export function instanceOfAssetDto(value: object): value is AssetDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('parentId' in value) || value['parentId'] === undefined) return false;
    if (!('fileName' in value) || value['fileName'] === undefined) return false;
    if (!('isProtected' in value) || value['isProtected'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('mimeType' in value) || value['mimeType'] === undefined) return false;
    if (!('fileType' in value) || value['fileType'] === undefined) return false;
    if (!('metadataText' in value) || value['metadataText'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    if (!('fileSize' in value) || value['fileSize'] === undefined) return false;
    if (!('fileVersion' in value) || value['fileVersion'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('lastModifiedBy' in value) || value['lastModifiedBy'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('lastModified' in value) || value['lastModified'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('isImage' in value) || value['isImage'] === undefined) return false;
    return true;
}

export function AssetDtoFromJSON(json: any): AssetDto {
    return AssetDtoFromJSONTyped(json, false);
}

export function AssetDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetDto {
    if (json == null) {
        return json;
    }
    return {
        
        'links': (mapValues(json['_links'], ResourceLinkFromJSON)),
        'id': json['id'],
        'parentId': json['parentId'],
        'fileName': json['fileName'],
        'fileHash': json['fileHash'] == null ? undefined : json['fileHash'],
        'isProtected': json['isProtected'],
        'slug': json['slug'],
        'mimeType': json['mimeType'],
        'fileType': json['fileType'],
        'metadataText': json['metadataText'],
        'editToken': json['editToken'] == null ? undefined : json['editToken'],
        'metadata': json['metadata'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'fileSize': json['fileSize'],
        'fileVersion': json['fileVersion'],
        'type': AssetTypeFromJSON(json['type']),
        'createdBy': json['createdBy'],
        'lastModifiedBy': json['lastModifiedBy'],
        'created': (new Date(json['created'])),
        'lastModified': (new Date(json['lastModified'])),
        'version': json['version'],
        'meta': json['_meta'] == null ? undefined : AssetMetaFromJSON(json['_meta']),
        'isImage': json['isImage'],
        'pixelWidth': json['pixelWidth'] == null ? undefined : json['pixelWidth'],
        'pixelHeight': json['pixelHeight'] == null ? undefined : json['pixelHeight'],
    };
}

export function AssetDtoToJSON(value?: AssetDto | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        '_links': (mapValues(value['links'], ResourceLinkToJSON)),
        'id': value['id'],
        'parentId': value['parentId'],
        'fileName': value['fileName'],
        'fileHash': value['fileHash'],
        'isProtected': value['isProtected'],
        'slug': value['slug'],
        'mimeType': value['mimeType'],
        'fileType': value['fileType'],
        'metadataText': value['metadataText'],
        'editToken': value['editToken'],
        'metadata': value['metadata'],
        'tags': value['tags'],
        'fileSize': value['fileSize'],
        'fileVersion': value['fileVersion'],
        'type': AssetTypeToJSON(value['type']),
        'createdBy': value['createdBy'],
        'lastModifiedBy': value['lastModifiedBy'],
        'created': ((value['created']).toISOString()),
        'lastModified': ((value['lastModified']).toISOString()),
        'version': value['version'],
        '_meta': AssetMetaToJSON(value['meta']),
        'isImage': value['isImage'],
        'pixelWidth': value['pixelWidth'],
        'pixelHeight': value['pixelHeight'],
    };
}