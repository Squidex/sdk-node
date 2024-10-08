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
 * @interface ImportContentsDto
 */
export interface ImportContentsDto {
    /**
     * The data to import.
     * @type {Array<{ [key: string]: { [key: string]: any; }; }>}
     * @memberof ImportContentsDto
     */
    datas: Array<{ [key: string]: { [key: string]: any; }; }>;
    /**
     * True to automatically publish the content.
     * @type {boolean}
     * @memberof ImportContentsDto
     * @deprecated
     */
    publish?: boolean;
    /**
     * True to turn off scripting for faster inserts. Default: true.
     * @type {boolean}
     * @memberof ImportContentsDto
     */
    doNotScript?: boolean;
    /**
     * True to turn off costly validation: Unique checks, asset checks and reference checks. Default: true.
     * @type {boolean}
     * @memberof ImportContentsDto
     */
    optimizeValidation?: boolean;
}


/**
 * Check if a given object implements the ImportContentsDto interface.
 */
export function instanceOfImportContentsDto(value: any): value is ImportContentsDto {
    if (!value) {
        return false;
    }
    if (!('datas' in value) || value['datas'] === undefined) return false;
    return true;
}

export function ImportContentsDtoFromJSON(json: any): ImportContentsDto {
    return ImportContentsDtoFromJSONTyped(json, false);
}

export function ImportContentsDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ImportContentsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'datas': json['datas'],
        'publish': json['publish'] == null ? undefined : json['publish'],
        'doNotScript': json['doNotScript'] == null ? undefined : json['doNotScript'],
        'optimizeValidation': json['optimizeValidation'] == null ? undefined : json['optimizeValidation'],
    };
}

export function ImportContentsDtoToJSON(value?: ImportContentsDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'datas': value['datas'],
        'publish': value['publish'],
        'doNotScript': value['doNotScript'],
        'optimizeValidation': value['optimizeValidation'],
    };
}
