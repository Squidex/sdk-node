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
export const WebhookMethod = {
    Post: 'POST',
    Put: 'PUT',
    Get: 'GET',
    Delete: 'DELETE',
    Patch: 'PATCH'
} as const;
export type WebhookMethod = typeof WebhookMethod[keyof typeof WebhookMethod];


export function instanceOfWebhookMethod(value: any): boolean {
    for (const key in WebhookMethod) {
        if (Object.prototype.hasOwnProperty.call(WebhookMethod, key)) {
            if (WebhookMethod[key as keyof typeof WebhookMethod] === value) {
                return true;
            }
        }
    }
    return false;
}

export function WebhookMethodFromJSON(json: any): WebhookMethod {
    return WebhookMethodFromJSONTyped(json, false);
}

export function WebhookMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookMethod {
    return json as WebhookMethod;
}

export function WebhookMethodToJSON(value?: WebhookMethod | null): any {
    return value as any;
}

