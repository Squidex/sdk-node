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

import type { FeatureDto } from './FeatureDto';
import {
    FeatureDtoFromJSON,
    FeatureDtoToJSON,
} from './FeatureDto';

/**
 * 
 * @export
 * @interface FeaturesDto
 */
export interface FeaturesDto {
    /**
     * The latest features.
     * @type {Array<FeatureDto>}
     * @memberof FeaturesDto
     */
    features: Array<FeatureDto>;
    /**
     * The recent version.
     * @type {number}
     * @memberof FeaturesDto
     */
    version: number;
}


/**
 * Check if a given object implements the FeaturesDto interface.
 */
export function instanceOfFeaturesDto(value: any): value is FeaturesDto {
    if (!value) {
        return false;
    }
    if (!('features' in value) || value['features'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function FeaturesDtoFromJSON(json: any): FeaturesDto {
    return FeaturesDtoFromJSONTyped(json, false);
}

export function FeaturesDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): FeaturesDto {
    if (json == null) {
        return json;
    }
    return {
        
        'features': ((json['features'] as Array<any>).map(FeatureDtoFromJSON)),
        'version': json['version'],
    };
}

export function FeaturesDtoToJSON(value?: FeaturesDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'features': ((value['features'] as Array<any>).map(x => FeatureDtoToJSON(x))),
        'version': value['version'],
    };
}
