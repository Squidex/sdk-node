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
export const ImageFormat = {
    Avif: 'AVIF',
    Bmp: 'BMP',
    Gif: 'GIF',
    Jpeg: 'JPEG',
    Png: 'PNG',
    Tga: 'TGA',
    Tiff: 'TIFF',
    Webp: 'WEBP'
} as const;
export type ImageFormat = typeof ImageFormat[keyof typeof ImageFormat];


export function instanceOfImageFormat(value: any): boolean {
    for (const key in ImageFormat) {
        if (Object.prototype.hasOwnProperty.call(ImageFormat, key)) {
            if (ImageFormat[key as keyof typeof ImageFormat] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ImageFormatFromJSON(json: any): ImageFormat {
    return ImageFormatFromJSONTyped(json, false);
}

export function ImageFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageFormat {
    return json as ImageFormat;
}

export function ImageFormatToJSON(value?: ImageFormat | null): any {
    return value as any;
}

