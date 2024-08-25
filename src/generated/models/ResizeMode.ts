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


/**
 * 
 * @export
 */
export const ResizeMode = {
    Crop: 'Crop',
    CropUpsize: 'CropUpsize',
    Pad: 'Pad',
    BoxPad: 'BoxPad',
    Max: 'Max',
    Min: 'Min',
    Stretch: 'Stretch'
} as const;
export type ResizeMode = typeof ResizeMode[keyof typeof ResizeMode];


export function instanceOfResizeMode(value: any): boolean {
    for (const key in ResizeMode) {
        if (Object.prototype.hasOwnProperty.call(ResizeMode, key)) {
            if (ResizeMode[key as keyof typeof ResizeMode] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ResizeModeFromJSON(json: any): ResizeMode {
    return ResizeModeFromJSONTyped(json, false);
}

export function ResizeModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResizeMode {
    return json as ResizeMode;
}

export function ResizeModeToJSON(value?: ResizeMode | null): any {
    return value as any;
}
