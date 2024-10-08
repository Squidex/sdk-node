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
 */
export const AssetType = {
    Unknown: 'Unknown',
    Image: 'Image',
    Audio: 'Audio',
    Video: 'Video'
} as const;
export type AssetType = typeof AssetType[keyof typeof AssetType];


export function instanceOfAssetType(value: any): boolean {
    for (const key in AssetType) {
        if (Object.prototype.hasOwnProperty.call(AssetType, key)) {
            if (AssetType[key as keyof typeof AssetType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AssetTypeFromJSON(json: any): AssetType {
    return AssetTypeFromJSONTyped(json, false);
}

export function AssetTypeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): AssetType {
    return json as AssetType;
}

export function AssetTypeToJSON(value?: AssetType | null): any {
    return value as any;
}
