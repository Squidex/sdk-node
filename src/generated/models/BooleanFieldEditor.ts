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
export const BooleanFieldEditor = {
    Checkbox: 'Checkbox',
    Toggle: 'Toggle'
} as const;
export type BooleanFieldEditor = typeof BooleanFieldEditor[keyof typeof BooleanFieldEditor];


export function instanceOfBooleanFieldEditor(value: any): boolean {
    for (const key in BooleanFieldEditor) {
        if (Object.prototype.hasOwnProperty.call(BooleanFieldEditor, key)) {
            if (BooleanFieldEditor[key as keyof typeof BooleanFieldEditor] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BooleanFieldEditorFromJSON(json: any): BooleanFieldEditor {
    return BooleanFieldEditorFromJSONTyped(json, false);
}

export function BooleanFieldEditorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BooleanFieldEditor {
    return json as BooleanFieldEditor;
}

export function BooleanFieldEditorToJSON(value?: BooleanFieldEditor | null): any {
    return value as any;
}

