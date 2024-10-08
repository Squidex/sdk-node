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
 * @interface FeatureDto
 */
export interface FeatureDto {
    /**
     * The name of the feature.
     * @type {string}
     * @memberof FeatureDto
     */
    name: string;
    /**
     * The description text.
     * @type {string}
     * @memberof FeatureDto
     */
    text: string;
}


/**
 * Check if a given object implements the FeatureDto interface.
 */
export function instanceOfFeatureDto(value: any): value is FeatureDto {
    if (!value) {
        return false;
    }
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function FeatureDtoFromJSON(json: any): FeatureDto {
    return FeatureDtoFromJSONTyped(json, false);
}

export function FeatureDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): FeatureDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'text': json['text'],
    };
}

export function FeatureDtoToJSON(value?: FeatureDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'text': value['text'],
    };
}
