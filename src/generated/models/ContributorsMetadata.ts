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
 * @interface ContributorsMetadata
 */
export interface ContributorsMetadata {
    /**
     * Indicates whether the user has been invited.
     * @type {string}
     * @memberof ContributorsMetadata
     */
    isInvited: string;
}


/**
 * Check if a given object implements the ContributorsMetadata interface.
 */
export function instanceOfContributorsMetadata(value: any): value is ContributorsMetadata {
    if (!value) {
        return false;
    }
    if (!('isInvited' in value) || value['isInvited'] === undefined) return false;
    return true;
}

export function ContributorsMetadataFromJSON(json: any): ContributorsMetadata {
    return ContributorsMetadataFromJSONTyped(json, false);
}

export function ContributorsMetadataFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ContributorsMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'isInvited': json['isInvited'],
    };
}

export function ContributorsMetadataToJSON(value?: ContributorsMetadata | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'isInvited': value['isInvited'],
    };
}
