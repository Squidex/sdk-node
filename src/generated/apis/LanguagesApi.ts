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
  LanguageDto,
} from '../models/index';
import {
    ErrorDtoFromJSON,
    ErrorDtoToJSON,
    LanguageDtoFromJSON,
    LanguageDtoToJSON,
} from '../models/index';

/**
 * LanguagesApi - interface
 * 
 * @export
 * @interface LanguagesApiInterface
 */
export interface LanguagesApiInterface {
    /**
     * Provide a list of supported language codes, following the ISO2Code standard.
     * @summary Get supported languages.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguagesApiInterface
     */
    getLanguagesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LanguageDto>>>;

    /**
     * Provide a list of supported language codes, following the ISO2Code standard.
     * Get supported languages.
     */
    getLanguages(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LanguageDto>>;

}

/**
 * 
 */
export class LanguagesApi extends runtime.BaseAPI implements LanguagesApiInterface {

    /**
     * Provide a list of supported language codes, following the ISO2Code standard.
     * Get supported languages.
     */
    async getLanguagesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LanguageDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/languages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LanguageDtoFromJSON));
    }

    /**
     * Provide a list of supported language codes, following the ISO2Code standard.
     * Get supported languages.
     */
    async getLanguages(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LanguageDto>> {
        const response = await this.getLanguagesRaw(initOverrides);
        return await response.value();
    }

}