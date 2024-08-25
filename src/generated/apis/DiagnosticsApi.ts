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
} from '../models/index';
import {
    ErrorDtoFromJSON,
    ErrorDtoToJSON,
} from '../models/index';

/**
 * DiagnosticsApi - interface
 * 
 * @export
 * @interface DiagnosticsApiInterface
 */
export interface DiagnosticsApiInterface {
    /**
     * 
     * @summary Creates a dump and writes it into storage..
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiagnosticsApiInterface
     */
    getDumpRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Creates a dump and writes it into storage..
     */
    getDump(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Creates a gc dump and writes it into storage.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiagnosticsApiInterface
     */
    getGCDumpRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Creates a gc dump and writes it into storage.
     */
    getGCDump(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class DiagnosticsApi extends runtime.BaseAPI implements DiagnosticsApiInterface {

    /**
     * Creates a dump and writes it into storage..
     */
    async getDumpRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/diagnostics/dump`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a dump and writes it into storage..
     */
    async getDump(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getDumpRaw(initOverrides);
    }

    /**
     * Creates a gc dump and writes it into storage.
     */
    async getGCDumpRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/diagnostics/gcdump`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a gc dump and writes it into storage.
     */
    async getGCDump(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getGCDumpRaw(initOverrides);
    }

}