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
 * @interface SchemaPropertiesDto
 */
export interface SchemaPropertiesDto {
    /**
     * Optional label for the editor.
     * @type {string}
     * @memberof SchemaPropertiesDto
     */
    label?: string | null;
    /**
     * Hints to describe the schema.
     * @type {string}
     * @memberof SchemaPropertiesDto
     */
    hints?: string | null;
    /**
     * The url to a the sidebar plugin for content lists.
     * @type {string}
     * @memberof SchemaPropertiesDto
     */
    contentsSidebarUrl?: string | null;
    /**
     * The url to a the sidebar plugin for content items.
     * @type {string}
     * @memberof SchemaPropertiesDto
     */
    contentSidebarUrl?: string | null;
    /**
     * The url to the editor plugin.
     * @type {string}
     * @memberof SchemaPropertiesDto
     */
    contentEditorUrl?: string | null;
    /**
     * The url to the editor plugin.
     * @type {string}
     * @memberof SchemaPropertiesDto
     */
    contentsEditorUrl?: string | null;
    /**
     * The url to the content list plugin.
     * @type {string}
     * @memberof SchemaPropertiesDto
     */
    contentsListUrl?: string | null;
    /**
     * True to validate the content items on publish.
     * @type {boolean}
     * @memberof SchemaPropertiesDto
     */
    validateOnPublish: boolean;
    /**
     * Tags for automation processes.
     * @type {Array<string>}
     * @memberof SchemaPropertiesDto
     */
    tags?: Array<string> | null;
}


/**
 * Check if a given object implements the SchemaPropertiesDto interface.
 */
export function instanceOfSchemaPropertiesDto(value: any): value is SchemaPropertiesDto {
    if (!value) {
        return false;
    }
    if (!('validateOnPublish' in value) || value['validateOnPublish'] === undefined) return false;
    return true;
}

export function SchemaPropertiesDtoFromJSON(json: any): SchemaPropertiesDto {
    return SchemaPropertiesDtoFromJSONTyped(json, false);
}

export function SchemaPropertiesDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SchemaPropertiesDto {
    if (json == null) {
        return json;
    }
    return {
        
        'label': json['label'] == null ? undefined : json['label'],
        'hints': json['hints'] == null ? undefined : json['hints'],
        'contentsSidebarUrl': json['contentsSidebarUrl'] == null ? undefined : json['contentsSidebarUrl'],
        'contentSidebarUrl': json['contentSidebarUrl'] == null ? undefined : json['contentSidebarUrl'],
        'contentEditorUrl': json['contentEditorUrl'] == null ? undefined : json['contentEditorUrl'],
        'contentsEditorUrl': json['contentsEditorUrl'] == null ? undefined : json['contentsEditorUrl'],
        'contentsListUrl': json['contentsListUrl'] == null ? undefined : json['contentsListUrl'],
        'validateOnPublish': json['validateOnPublish'],
        'tags': json['tags'] == null ? undefined : json['tags'],
    };
}

export function SchemaPropertiesDtoToJSON(value?: SchemaPropertiesDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'label': value['label'],
        'hints': value['hints'],
        'contentsSidebarUrl': value['contentsSidebarUrl'],
        'contentSidebarUrl': value['contentSidebarUrl'],
        'contentEditorUrl': value['contentEditorUrl'],
        'contentsEditorUrl': value['contentsEditorUrl'],
        'contentsListUrl': value['contentsListUrl'],
        'validateOnPublish': value['validateOnPublish'],
        'tags': value['tags'],
    };
}
