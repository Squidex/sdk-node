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
 * @interface UpdateUserDto
 */
export interface UpdateUserDto {
    /**
     * The email of the user. Unique value.
     * @type {string}
     * @memberof UpdateUserDto
     */
    email: string;
    /**
     * The display name (usually first name and last name) of the user.
     * @type {string}
     * @memberof UpdateUserDto
     */
    displayName: string;
    /**
     * The password of the user.
     * @type {string}
     * @memberof UpdateUserDto
     */
    password?: string | null;
    /**
     * Additional permissions for the user.
     * @type {Array<string>}
     * @memberof UpdateUserDto
     */
    permissions: Array<string>;
}


/**
 * Check if a given object implements the UpdateUserDto interface.
 */
export function instanceOfUpdateUserDto(value: any): value is UpdateUserDto {
    if (!value) {
        return false;
    }
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    return true;
}

export function UpdateUserDtoFromJSON(json: any): UpdateUserDto {
    return UpdateUserDtoFromJSONTyped(json, false);
}

export function UpdateUserDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UpdateUserDto {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'displayName': json['displayName'],
        'password': json['password'] == null ? undefined : json['password'],
        'permissions': json['permissions'],
    };
}

export function UpdateUserDtoToJSON(value?: UpdateUserDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'displayName': value['displayName'],
        'password': value['password'],
        'permissions': value['permissions'],
    };
}
