/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { SquidexApi } from "@fern-api/squidex";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Search {
    interface Options {
        environment?: environments.SquidexApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Search {
    constructor(private readonly options: Search.Options) {}

    public async getResults(
        app: string,
        request: SquidexApi.GetSearchResultsRequests = {}
    ): Promise<SquidexApi.SearchResultDto[]> {
        const { query } = request;
        const _queryParams = new URLSearchParams();
        if (query != null) {
            _queryParams.append("query", query);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/search`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.search.getResults.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquidexApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexApiTimeoutError();
            case "unknown":
                throw new errors.SquidexApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
