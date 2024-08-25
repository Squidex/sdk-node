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


import * as runtime from '../runtime';
import type {
  ErrorDto,
  TranslateDto,
  TranslationDto,
} from '../models/index';
import {
    ErrorDtoFromJSON,
    ErrorDtoToJSON,
    TranslateDtoFromJSON,
    TranslateDtoToJSON,
    TranslationDtoFromJSON,
    TranslationDtoToJSON,
} from '../models/index';

export interface TranslationsPostTranslationRequest {
    translateDto: TranslateDto;
}

/**
 * TranslationsApi - interface
 * 
 * @export
 * @interface TranslationsApiInterface
 */
export interface TranslationsApiInterface {
    /**
     * 
     * @summary Translate a text.
     * @param {TranslateDto} translateDto The translation request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TranslationsApiInterface
     */
    postTranslationRaw(requestParameters: TranslationsPostTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TranslationDto>>;

    /**
     * Translate a text.
     */
    postTranslation(requestParameters: TranslationsPostTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TranslationDto>;

}

/**
 * 
 */
export class TranslationsApi extends runtime.BaseAPI implements TranslationsApiInterface {

    /**
     * Translate a text.
     */
    async postTranslationRaw(requestParameters: TranslationsPostTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TranslationDto>> {
        if (requestParameters['translateDto'] == null) {
            throw new runtime.RequiredError(
                'translateDto',
                'Required parameter "translateDto" was null or undefined when calling ().'
            );
        }

        (requestParameters as any)['app'] = this.appName;
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/apps/{app}/translations`.replace(`{${"app"}}`, encodeURIComponent(String((requestParameters as any)['app']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TranslateDtoToJSON(requestParameters['translateDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TranslationDtoFromJSON(jsonValue));
    }

    /**
     * Translate a text.
     */
    async postTranslation(requestParameters: TranslationsPostTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TranslationDto> {
        const response = await this.postTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
