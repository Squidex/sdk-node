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

export interface PingGetAppPingRequest {
}

/**
 * PingApi - interface
 * 
 * @export
 * @interface PingApiInterface
 */
export interface PingApiInterface {
    /**
     * Can be used to test, if the Squidex API is alive and responding.
     * @summary Get ping status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PingApiInterface
     */
    getAppPingRaw(requestParameters: PingGetAppPingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Can be used to test, if the Squidex API is alive and responding.
     * Get ping status.
     */
    getAppPing(requestParameters: PingGetAppPingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get API information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PingApiInterface
     */
    getInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>>;

    /**
     * Get API information.
     */
    getInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }>;

    /**
     * Can be used to test, if the Squidex API is alive and responding.
     * @summary Get ping status of the API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PingApiInterface
     */
    getPingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Can be used to test, if the Squidex API is alive and responding.
     * Get ping status of the API.
     */
    getPing(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class PingApi extends runtime.BaseAPI implements PingApiInterface {

    /**
     * Can be used to test, if the Squidex API is alive and responding.
     * Get ping status.
     */
    async getAppPingRaw(requestParameters: PingGetAppPingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        (requestParameters as any)['app'] = this.appName;
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/ping/{app}`.replace(`{${"app"}}`, encodeURIComponent(String((requestParameters as any)['app']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Can be used to test, if the Squidex API is alive and responding.
     * Get ping status.
     */
    async getAppPing(requestParameters: PingGetAppPingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getAppPingRaw(requestParameters, initOverrides);
    }

    /**
     * Get API information.
     */
    async getInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get API information.
     */
    async getInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.getInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * Can be used to test, if the Squidex API is alive and responding.
     * Get ping status of the API.
     */
    async getPingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/ping`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Can be used to test, if the Squidex API is alive and responding.
     * Get ping status of the API.
     */
    async getPing(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getPingRaw(initOverrides);
    }

}
