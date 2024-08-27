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

/**
 * 
 * @export
 * @interface RenameAssetFolderDto
 */
export interface RenameAssetFolderDto {
    /**
     * The name of the folder.
     * @type {string}
     * @memberof RenameAssetFolderDto
     */
    folderName: string;
}


/**
 * Check if a given object implements the RenameAssetFolderDto interface.
 */
export function instanceOfRenameAssetFolderDto(value: any): value is RenameAssetFolderDto {
    if (!value) {
        return false;
    }
    if (!('folderName' in value) || value['folderName'] === undefined) return false;
    return true;
}

export function RenameAssetFolderDtoFromJSON(json: any): RenameAssetFolderDto {
    return RenameAssetFolderDtoFromJSONTyped(json, false);
}

export function RenameAssetFolderDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): RenameAssetFolderDto {
    if (json == null) {
        return json;
    }
    return {
        
        'folderName': json['folderName'],
    };
}

export function RenameAssetFolderDtoToJSON(value?: RenameAssetFolderDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'folderName': value['folderName'],
    };
}
