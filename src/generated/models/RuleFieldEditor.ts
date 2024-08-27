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
export const RuleFieldEditor = {
    Checkbox: 'Checkbox',
    Dropdown: 'Dropdown',
    Email: 'Email',
    Javascript: 'Javascript',
    Number: 'Number',
    Password: 'Password',
    Text: 'Text',
    TextArea: 'TextArea',
    Url: 'Url'
} as const;
export type RuleFieldEditor = typeof RuleFieldEditor[keyof typeof RuleFieldEditor];


export function instanceOfRuleFieldEditor(value: any): boolean {
    for (const key in RuleFieldEditor) {
        if (Object.prototype.hasOwnProperty.call(RuleFieldEditor, key)) {
            if (RuleFieldEditor[key as keyof typeof RuleFieldEditor] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RuleFieldEditorFromJSON(json: any): RuleFieldEditor {
    return RuleFieldEditorFromJSONTyped(json, false);
}

export function RuleFieldEditorFromJSONTyped(json: any, _ignoreDiscriminator: boolean): RuleFieldEditor {
    return json as RuleFieldEditor;
}

export function RuleFieldEditorToJSON(value?: RuleFieldEditor | null): any {
    return value as any;
}
