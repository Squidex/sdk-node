/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Squidex } from "@fern-api/squidex";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace History {
    interface Options {
        environment?: environments.SquidexEnvironment | string;
        app: string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class History {
    constructor(private readonly options: History.Options) {}

    public async get(request: Squidex.GetHistoricalEventsRequest = {}): Promise<Squidex.HistoryEventDto[]> {
        const { channel } = request;
        const _queryParams = new URLSearchParams();
        if (channel != null) {
            _queryParams.append("channel", channel);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexEnvironment.Production,
                `/api/apps/${this.options.app}/history`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.history.get.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquidexError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    public async getTeamHistory(
        team: string,
        request: Squidex.GetTeamHistoryRequest = {}
    ): Promise<Squidex.HistoryEventDto[]> {
        const { channel } = request;
        const _queryParams = new URLSearchParams();
        if (channel != null) {
            _queryParams.append("channel", channel);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexEnvironment.Production,
                `/api/teams/${team}/history`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.history.getTeamHistory.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquidexError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
