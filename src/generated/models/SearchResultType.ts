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
export const SearchResultType = {
    Asset: 'Asset',
    Content: 'Content',
    Dashboard: 'Dashboard',
    Setting: 'Setting',
    Rule: 'Rule',
    Schema: 'Schema'
} as const;
export type SearchResultType = typeof SearchResultType[keyof typeof SearchResultType];


export function instanceOfSearchResultType(value: any): boolean {
    for (const key in SearchResultType) {
        if (Object.prototype.hasOwnProperty.call(SearchResultType, key)) {
            if (SearchResultType[key as keyof typeof SearchResultType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SearchResultTypeFromJSON(json: any): SearchResultType {
    return SearchResultTypeFromJSONTyped(json, false);
}

export function SearchResultTypeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SearchResultType {
    return json as SearchResultType;
}

export function SearchResultTypeToJSON(value?: SearchResultType | null): any {
    return value as any;
}
