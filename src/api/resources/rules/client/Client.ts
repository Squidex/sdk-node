/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { SquidexApi } from "@fern-api/squidex";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Rules {
    interface Options {
        environment?: environments.SquidexApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Rules {
    constructor(private readonly options: Rules.Options) {}

    public async getActions(): Promise<Record<string, SquidexApi.RuleElementDto>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                "/api/rules/actions"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.rules.getActions.Response.parseOrThrow(_response.body, {
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

    public async getRules(app: string): Promise<SquidexApi.RulesDto> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.RulesDto.parseOrThrow(_response.body, {
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

    public async createRule(app: string, request: SquidexApi.CreateRuleDto): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.CreateRuleDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return;
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

    public async cancelRun(app: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/run`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
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

    public async updateRule(app: string, id: string, request: SquidexApi.UpdateRuleDto): Promise<SquidexApi.RuleDto> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/${id}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.UpdateRuleDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.RuleDto.parseOrThrow(_response.body, {
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

    public async deleteRule(app: string, id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
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

    public async enableRule(app: string, id: string): Promise<SquidexApi.RuleDto> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/${id}/enable`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.RuleDto.parseOrThrow(_response.body, {
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

    public async disableRule(app: string, id: string): Promise<SquidexApi.RuleDto> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/${id}/disable`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.RuleDto.parseOrThrow(_response.body, {
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

    public async triggerRule(app: string, id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/${id}/trigger`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
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

    public async runRule(app: string, id: string, request: SquidexApi.RunRuleRequest = {}): Promise<void> {
        const { fromSnapshots } = request;
        const _queryParams = new URLSearchParams();
        if (fromSnapshots != null) {
            _queryParams.append("fromSnapshots", fromSnapshots.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/${id}/run`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return;
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

    public async cancelRuleEvents(app: string, id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/${id}/events`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
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

    public async createRuleSimulation(
        app: string,
        request: SquidexApi.CreateRuleDto
    ): Promise<SquidexApi.SimulatedRuleEventsDto> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/simulate`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.CreateRuleDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.SimulatedRuleEventsDto.parseOrThrow(_response.body, {
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

    public async getRuleSimulation(app: string, id: string): Promise<SquidexApi.SimulatedRuleEventsDto> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/${id}/simulate`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.SimulatedRuleEventsDto.parseOrThrow(_response.body, {
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

    public async getRuleEvents(
        app: string,
        request: SquidexApi.GetRuleEventsRequest = {}
    ): Promise<SquidexApi.RuleEventsDto> {
        const { ruleId, skip, take } = request;
        const _queryParams = new URLSearchParams();
        if (ruleId != null) {
            _queryParams.append("ruleId", ruleId);
        }

        if (skip != null) {
            _queryParams.append("skip", skip.toString());
        }

        if (take != null) {
            _queryParams.append("take", take.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/events`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.RuleEventsDto.parseOrThrow(_response.body, {
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

    public async cancelAllEvents(app: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/events`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
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

    public async retryEvent(app: string, id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/events/${id}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
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

    public async cancelEvent(app: string, id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/apps/${app}/rules/events/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
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

    public async getEvents(): Promise<string[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                "/api/rules/eventtypes"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.rules.getEvents.Response.parseOrThrow(_response.body, {
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

    public async getEvent(type: string): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexApiEnvironment.Production,
                `/api/rules/eventtypes/${type}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return _response.body;
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
