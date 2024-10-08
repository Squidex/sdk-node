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

import { AssetChangedRuleTriggerDto, AssetChangedRuleTriggerDtoFromJSONTyped, AssetChangedRuleTriggerDtoToJSON } from './AssetChangedRuleTriggerDto';
import { CommentRuleTriggerDto, CommentRuleTriggerDtoFromJSONTyped, CommentRuleTriggerDtoToJSON } from './CommentRuleTriggerDto';
import { ContentChangedRuleTriggerDto, ContentChangedRuleTriggerDtoFromJSONTyped, ContentChangedRuleTriggerDtoToJSON } from './ContentChangedRuleTriggerDto';
import { ManualRuleTriggerDto, ManualRuleTriggerDtoFromJSONTyped, ManualRuleTriggerDtoToJSON } from './ManualRuleTriggerDto';
import { SchemaChangedRuleTriggerDto, SchemaChangedRuleTriggerDtoFromJSONTyped, SchemaChangedRuleTriggerDtoToJSON } from './SchemaChangedRuleTriggerDto';
import { UsageRuleTriggerDto, UsageRuleTriggerDtoFromJSONTyped, UsageRuleTriggerDtoToJSON } from './UsageRuleTriggerDto';
/**
 * 
 * @export
 * @interface RuleTriggerDto
 */
export interface RuleTriggerDto {
    /**
     * 
     * @type {string}
     * @memberof RuleTriggerDto
     */
    triggerType: string;
}

export function isAssetChangedRuleTriggerDto(value: RuleTriggerDto): value is AssetChangedRuleTriggerDto {
    return value['triggerType'] === 'AssetChanged';
}

export function isCommentRuleTriggerDto(value: RuleTriggerDto): value is CommentRuleTriggerDto {
    return value['triggerType'] === 'Comment';
}

export function isContentChangedRuleTriggerDto(value: RuleTriggerDto): value is ContentChangedRuleTriggerDto {
    return value['triggerType'] === 'ContentChanged';
}

export function isManualRuleTriggerDto(value: RuleTriggerDto): value is ManualRuleTriggerDto {
    return value['triggerType'] === 'Manual';
}

export function isSchemaChangedRuleTriggerDto(value: RuleTriggerDto): value is SchemaChangedRuleTriggerDto {
    return value['triggerType'] === 'SchemaChanged';
}

export function isUsageRuleTriggerDto(value: RuleTriggerDto): value is UsageRuleTriggerDto {
    return value['triggerType'] === 'Usage';
}


/**
 * Check if a given object implements the RuleTriggerDto interface.
 */
export function instanceOfRuleTriggerDto(value: any): value is RuleTriggerDto {
    if (!value) {
        return false;
    }
    if (!('triggerType' in value) || value['triggerType'] === undefined) return false;
    return true;
}

export function RuleTriggerDtoFromJSON(json: any): RuleTriggerDto {
    return RuleTriggerDtoFromJSONTyped(json, false);
}

export function RuleTriggerDtoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): RuleTriggerDto {
    if (json == null) {
        return json;
    }
    if (!_ignoreDiscriminator) {
        if (json['triggerType'] === 'AssetChanged') {
            return AssetChangedRuleTriggerDtoFromJSONTyped(json, true);
        }
        if (json['triggerType'] === 'Comment') {
            return CommentRuleTriggerDtoFromJSONTyped(json, true);
        }
        if (json['triggerType'] === 'ContentChanged') {
            return ContentChangedRuleTriggerDtoFromJSONTyped(json, true);
        }
        if (json['triggerType'] === 'Manual') {
            return ManualRuleTriggerDtoFromJSONTyped(json, true);
        }
        if (json['triggerType'] === 'SchemaChanged') {
            return SchemaChangedRuleTriggerDtoFromJSONTyped(json, true);
        }
        if (json['triggerType'] === 'Usage') {
            return UsageRuleTriggerDtoFromJSONTyped(json, true);
        }
    }
    return {
        
        'triggerType': json['triggerType'],
    };
}

export function RuleTriggerDtoToJSON(value?: RuleTriggerDto | null, _ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    if (!_ignoreDiscriminator) {
        if (value['triggerType'] === 'AssetChanged') {
            return AssetChangedRuleTriggerDtoToJSON(value as AssetChangedRuleTriggerDto, true);
        }
        if (value['triggerType'] === 'Comment') {
            return CommentRuleTriggerDtoToJSON(value as CommentRuleTriggerDto, true);
        }
        if (value['triggerType'] === 'ContentChanged') {
            return ContentChangedRuleTriggerDtoToJSON(value as ContentChangedRuleTriggerDto, true);
        }
        if (value['triggerType'] === 'Manual') {
            return ManualRuleTriggerDtoToJSON(value as ManualRuleTriggerDto, true);
        }
        if (value['triggerType'] === 'SchemaChanged') {
            return SchemaChangedRuleTriggerDtoToJSON(value as SchemaChangedRuleTriggerDto, true);
        }
        if (value['triggerType'] === 'Usage') {
            return UsageRuleTriggerDtoToJSON(value as UsageRuleTriggerDto, true);
        }
    }
    return {
        
        'triggerType': value['triggerType'],
    };
}
