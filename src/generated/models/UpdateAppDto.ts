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
 * @interface UpdateAppDto
 */
export interface UpdateAppDto {
    /**
     * The optional label of your app.
     * @type {string}
     * @memberof UpdateAppDto
     */
    label?: string | null;
    /**
     * The optional description of your app.
     * @type {string}
     * @memberof UpdateAppDto
     */
    description?: string | null;
}


/**
 * Check if a given object implements the UpdateAppDto interface.
 */
export function instanceOfUpdateAppDto(value: any): value is UpdateAppDto {
    if (!value) {
        return false;
    }
    return true;
}

export function UpdateAppDtoFromJSON(json: any): UpdateAppDto {
    return UpdateAppDtoFromJSONTyped(json, false);
}

export function UpdateAppDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UpdateAppDto {
    if (json == null) {
        return json;
    }
    return {
        
        'label': json['label'] == null ? undefined : json['label'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function UpdateAppDtoToJSON(value?: UpdateAppDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'label': value['label'],
        'description': value['description'],
    };
}
