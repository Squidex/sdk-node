/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Squidex from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Statistics {
    interface Options {
        environment?: core.Supplier<environments.SquidexEnvironment | string>;
        appName: string;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
        streamingFetcher?: core.StreamingFetchFunction;
    }
}

export class Statistics {
    constructor(protected readonly options: Statistics.Options) {}

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getLog(): Promise<Squidex.LogDownloadDto> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.SquidexEnvironment.Default,
                `api/apps/${this.options.appName}/usages/log`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.LogDownloadDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getUsages(fromDate: string, toDate: string): Promise<Squidex.CallsUsageDtoDto> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.SquidexEnvironment.Default,
                `api/apps/${this.options.appName}/usages/calls/${fromDate}/${toDate}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CallsUsageDtoDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getUsagesForTeam(team: string, fromDate: string, toDate: string): Promise<Squidex.CallsUsageDtoDto> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.SquidexEnvironment.Default,
                `api/teams/${team}/usages/calls/${fromDate}/${toDate}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CallsUsageDtoDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getCurrentStorageSize(): Promise<Squidex.CurrentStorageDto> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.SquidexEnvironment.Default,
                `api/apps/${this.options.appName}/usages/storage/today`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CurrentStorageDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getTeamCurrentStorageSizeForTeam(team: string): Promise<Squidex.CurrentStorageDto> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.SquidexEnvironment.Default,
                `api/teams/${team}/usages/storage/today`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CurrentStorageDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getStorageSizes(fromDate: string, toDate: string): Promise<Squidex.StorageUsagePerDateDto[]> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.SquidexEnvironment.Default,
                `api/apps/${this.options.appName}/usages/storage/${fromDate}/${toDate}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.statistics.getStorageSizes.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getStorageSizesForTeam(
        team: string,
        fromDate: string,
        toDate: string
    ): Promise<Squidex.StorageUsagePerDateDto[]> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.SquidexEnvironment.Default,
                `api/teams/${team}/usages/storage/${fromDate}/${toDate}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.0.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.statistics.getStorageSizesForTeam.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this.options.token)}`;
    }
}
