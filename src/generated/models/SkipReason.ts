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
export const SkipReason = {
    None: 'None',
    ConditionDoesNotMatch: 'ConditionDoesNotMatch',
    ConditionPrecheckDoesNotMatch: 'ConditionPrecheckDoesNotMatch',
    Disabled: 'Disabled',
    Failed: 'Failed',
    FromRule: 'FromRule',
    NoAction: 'NoAction',
    NoTrigger: 'NoTrigger',
    TooOld: 'TooOld',
    WrongEvent: 'WrongEvent',
    WrongEventForTrigger: 'WrongEventForTrigger'
} as const;
export type SkipReason = typeof SkipReason[keyof typeof SkipReason];


export function instanceOfSkipReason(value: any): boolean {
    for (const key in SkipReason) {
        if (Object.prototype.hasOwnProperty.call(SkipReason, key)) {
            if (SkipReason[key as keyof typeof SkipReason] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SkipReasonFromJSON(json: any): SkipReason {
    return SkipReasonFromJSONTyped(json, false);
}

export function SkipReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkipReason {
    return json as SkipReason;
}

export function SkipReasonToJSON(value?: SkipReason | null): any {
    return value as any;
}
