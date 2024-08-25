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
  JobsDto,
} from '../models/index';
import {
    ErrorDtoFromJSON,
    ErrorDtoToJSON,
    JobsDtoFromJSON,
    JobsDtoToJSON,
} from '../models/index';

export interface JobsContentGetJobContentRequest {
    id: string;
    appId?: string;
}

export interface JobsDeleteJobRequest {
    id: string;
}

export interface JobsGetJobsRequest {
}

/**
 * JobsApi - interface
 * 
 * @export
 * @interface JobsApiInterface
 */
export interface JobsApiInterface {
    /**
     * 
     * @summary Get the job content.
     * @param {string} id The ID of the job.
     * @param {string} [appId] The ID of the app.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    getJobContentRaw(requestParameters: JobsContentGetJobContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>>;

    /**
     * Get the job content.
     */
    getJobContent(requestParameters: JobsContentGetJobContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob>;

    /**
     * 
     * @summary Delete a job.
     * @param {string} id The ID of the jobs to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    deleteJobRaw(requestParameters: JobsDeleteJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a job.
     */
    deleteJob(requestParameters: JobsDeleteJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get all jobs.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiInterface
     */
    getJobsRaw(requestParameters: JobsGetJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobsDto>>;

    /**
     * Get all jobs.
     */
    getJobs(requestParameters: JobsGetJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobsDto>;

}

/**
 * 
 */
export class JobsApi extends runtime.BaseAPI implements JobsApiInterface {

    /**
     * Get the job content.
     */
    async getJobContentRaw(requestParameters: JobsContentGetJobContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        (requestParameters as any)['app'] = this.appName;
        const queryParameters: any = {};

        if (requestParameters['appId'] != null) {
            queryParameters['appId'] = requestParameters['appId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/jobs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String((requestParameters as any)['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Get the job content.
     */
    async getJobContent(requestParameters: JobsContentGetJobContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getJobContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a job.
     */
    async deleteJobRaw(requestParameters: JobsDeleteJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        (requestParameters as any)['app'] = this.appName;
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/{app}/jobs/{id}`.replace(`{${"app"}}`, encodeURIComponent(String((requestParameters as any)['app']))).replace(`{${"id"}}`, encodeURIComponent(String((requestParameters as any)['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a job.
     */
    async deleteJob(requestParameters: JobsDeleteJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteJobRaw(requestParameters, initOverrides);
    }

    /**
     * Get all jobs.
     */
    async getJobsRaw(requestParameters: JobsGetJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobsDto>> {
        (requestParameters as any)['app'] = this.appName;
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/{app}/jobs`.replace(`{${"app"}}`, encodeURIComponent(String((requestParameters as any)['app']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobsDtoFromJSON(jsonValue));
    }

    /**
     * Get all jobs.
     */
    async getJobs(requestParameters: JobsGetJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobsDto> {
        const response = await this.getJobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
