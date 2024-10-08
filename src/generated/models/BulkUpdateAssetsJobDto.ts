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

import type { BulkUpdateAssetType } from './BulkUpdateAssetType';
import {
    BulkUpdateAssetTypeFromJSON,
    BulkUpdateAssetTypeToJSON,
} from './BulkUpdateAssetType';

/**
 * 
 * @export
 * @interface BulkUpdateAssetsJobDto
 */
export interface BulkUpdateAssetsJobDto {
    /**
     * An optional ID of the asset to update.
     * @type {string}
     * @memberof BulkUpdateAssetsJobDto
     */
    id?: string;
    /**
     * 
     * @type {BulkUpdateAssetType}
     * @memberof BulkUpdateAssetsJobDto
     */
    type?: BulkUpdateAssetType;
    /**
     * The parent folder id.
     * @type {string}
     * @memberof BulkUpdateAssetsJobDto
     */
    parentId?: string;
    /**
     * The new name of the asset.
     * @type {string}
     * @memberof BulkUpdateAssetsJobDto
     */
    fileName?: string | null;
    /**
     * The new slug of the asset.
     * @type {string}
     * @memberof BulkUpdateAssetsJobDto
     */
    slug?: string | null;
    /**
     * True, when the asset is not public.
     * @type {boolean}
     * @memberof BulkUpdateAssetsJobDto
     */
    isProtected?: boolean | null;
    /**
     * The new asset tags.
     * @type {Array<string>}
     * @memberof BulkUpdateAssetsJobDto
     */
    tags?: Array<string> | null;
    /**
     * The asset metadata.
     * @type {{ [key: string]: any; }}
     * @memberof BulkUpdateAssetsJobDto
     */
    metadata?: { [key: string]: any; } | null;
    /**
     * True to delete the asset permanently.
     * @type {boolean}
     * @memberof BulkUpdateAssetsJobDto
     */
    permanent?: boolean;
    /**
     * The expected version.
     * @type {number}
     * @memberof BulkUpdateAssetsJobDto
     */
    expectedVersion?: number;
}




/**
 * Check if a given object implements the BulkUpdateAssetsJobDto interface.
 */
export function instanceOfBulkUpdateAssetsJobDto(value: any): value is BulkUpdateAssetsJobDto {
    if (!value) {
        return false;
    }
    return true;
}

export function BulkUpdateAssetsJobDtoFromJSON(json: any): BulkUpdateAssetsJobDto {
    return BulkUpdateAssetsJobDtoFromJSONTyped(json, false);
}

export function BulkUpdateAssetsJobDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): BulkUpdateAssetsJobDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : BulkUpdateAssetTypeFromJSON(json['type']),
        'parentId': json['parentId'] == null ? undefined : json['parentId'],
        'fileName': json['fileName'] == null ? undefined : json['fileName'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'isProtected': json['isProtected'] == null ? undefined : json['isProtected'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'permanent': json['permanent'] == null ? undefined : json['permanent'],
        'expectedVersion': json['expectedVersion'] == null ? undefined : json['expectedVersion'],
    };
}

export function BulkUpdateAssetsJobDtoToJSON(value?: BulkUpdateAssetsJobDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': BulkUpdateAssetTypeToJSON(value['type']),
        'parentId': value['parentId'],
        'fileName': value['fileName'],
        'slug': value['slug'],
        'isProtected': value['isProtected'],
        'tags': value['tags'],
        'metadata': value['metadata'],
        'permanent': value['permanent'],
        'expectedVersion': value['expectedVersion'],
    };
}
