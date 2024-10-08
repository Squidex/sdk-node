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
  CreateRuleDto,
  RuleDto,
  RuleElementDto,
  RuleEventsDto,
  RulesDto,
  SimulatedRuleEventsDto,
  UpdateRuleDto,
} from '../models/index';
import {
    CreateRuleDtoToJSON,
    RuleDtoFromJSON,
    RuleElementDtoFromJSON,
    RuleEventsDtoFromJSON,
    RulesDtoFromJSON,
    SimulatedRuleEventsDtoFromJSON,
    UpdateRuleDtoToJSON,
} from '../models/index';

export interface RulesDeleteEventRequestRaw {
    id: string;
}

export interface RulesDeleteRuleRequestRaw {
    id: string;
}

export interface RulesDeleteRuleEventsRequestRaw {
    id: string;
}

export interface RulesDisableRuleRequestRaw {
    id: string;
}

export interface RulesEnableRuleRequestRaw {
    id: string;
}

export interface RulesGetEventSchemaRequestRaw {
    type: string;
}

export interface RulesGetEventsRequest {
    ruleId?: string | null;
    skip?: number;
    take?: number;
}

export interface RulesGetEventsRequestRaw {
    ruleId?: string | null;
    skip?: number;
    take?: number;
}

export interface RulesPostRuleRequestRaw {
    createRuleDto: CreateRuleDto;
}

export interface RulesPutEventRequestRaw {
    id: string;
}

export interface RulesPutRuleRequestRaw {
    id: string;
    updateRuleDto: UpdateRuleDto;
}

export interface RulesPutRuleRunRequest {
    fromSnapshots?: boolean;
}

export interface RulesPutRuleRunRequestRaw {
    id: string;
    fromSnapshots?: boolean;
}

export interface RulesSimulateGETRequestRaw {
    id: string;
}

export interface RulesSimulatePOSTRequestRaw {
    createRuleDto: CreateRuleDto;
}

export interface RulesTriggerRuleRequestRaw {
    id: string;
}

/**
 * RulesApi - interface
 * 
 * @export
 * @interface RulesApiInterface
 */
export interface RulesApiInterface {
    /**
     * 
     * @summary Cancels an event.
     * @param {string} id The event to cancel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    deleteEventRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Cancels an event.
     */
    deleteEvent(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Cancels all events.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    deleteEventsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Cancels all events.
     */
    deleteEvents(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Delete a rule.
     * @param {string} id The ID of the rule to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    deleteRuleRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a rule.
     */
    deleteRule(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Cancels all rule events.
     * @param {string} id The ID of the rule to cancel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    deleteRuleEventsRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Cancels all rule events.
     */
    deleteRuleEvents(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Cancel the current run.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    deleteRuleRunRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Cancel the current run.
     */
    deleteRuleRun(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Disable a rule.
     * @param {string} id The ID of the rule to disable.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    disableRuleRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleDto>>;

    /**
     * Disable a rule.
     */
    disableRule(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleDto>;

    /**
     * 
     * @summary Enable a rule.
     * @param {string} id The ID of the rule to enable.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    enableRuleRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleDto>>;

    /**
     * Enable a rule.
     */
    enableRule(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleDto>;

    /**
     * 
     * @summary Get supported rule actions.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    getActionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: RuleElementDto; }>>;

    /**
     * Get supported rule actions.
     */
    getActions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: RuleElementDto; }>;

    /**
     * 
     * @summary Provide the json schema for the event with the specified name.
     * @param {string} type The type name of the event.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    getEventSchemaRaw(type: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Provide the json schema for the event with the specified name.
     */
    getEventSchema(type: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Provide a list of all event types that are used in rules.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    getEventTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Provide a list of all event types that are used in rules.
     */
    getEventTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;

    /**
     * 
     * @summary Get rule events.
     * @param {string} [ruleId] The optional rule id to filter to events.
     * @param {number} [skip] The number of events to skip.
     * @param {number} [take] The number of events to take.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    getEventsRaw(requestParameters?: RulesGetEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleEventsDto>>;

    /**
     * Get rule events.
     */
    getEvents(requestParameters?: RulesGetEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleEventsDto>;

    /**
     * 
     * @summary Get rules.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    getRulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RulesDto>>;

    /**
     * Get rules.
     */
    getRules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RulesDto>;

    /**
     * 
     * @summary Create a new rule.
     * @param {CreateRuleDto} createRuleDto The rule object that needs to be added to the app.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    postRuleRaw(createRuleDto: CreateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleDto>>;

    /**
     * Create a new rule.
     */
    postRule(createRuleDto: CreateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleDto>;

    /**
     * 
     * @summary Retry the event immediately.
     * @param {string} id The event to enqueue.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    putEventRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Retry the event immediately.
     */
    putEvent(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Update a rule.
     * @param {string} id The ID of the rule to update.
     * @param {UpdateRuleDto} updateRuleDto The rule object that needs to be added to the app.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    putRuleRaw(id: string, updateRuleDto: UpdateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleDto>>;

    /**
     * Update a rule.
     */
    putRule(id: string, updateRuleDto: UpdateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleDto>;

    /**
     * 
     * @summary Run a rule.
     * @param {string} id The ID of the rule to run.
     * @param {boolean} [fromSnapshots] Runs the rule from snapeshots if possible.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    putRuleRunRaw(id: string, requestParameters?: RulesPutRuleRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Run a rule.
     */
    putRuleRun(id: string, requestParameters?: RulesPutRuleRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Simulate a rule.
     * @param {string} id The ID of the rule to simulate.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    simulateGETRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimulatedRuleEventsDto>>;

    /**
     * Simulate a rule.
     */
    simulateGET(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimulatedRuleEventsDto>;

    /**
     * 
     * @summary Simulate a rule.
     * @param {CreateRuleDto} createRuleDto The rule to simulate.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    simulatePOSTRaw(createRuleDto: CreateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimulatedRuleEventsDto>>;

    /**
     * Simulate a rule.
     */
    simulatePOST(createRuleDto: CreateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimulatedRuleEventsDto>;

    /**
     * 
     * @summary Trigger a rule.
     * @param {string} id The ID of the rule to disable.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiInterface
     */
    triggerRuleRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Trigger a rule.
     */
    triggerRule(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class RulesApi extends runtime.BaseAPI implements RulesApiInterface {

    /**
     * Cancels an event.
     */
    async deleteEventRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/events/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Cancels an event.
     */
    async deleteEvent(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteEventRaw(id, initOverrides);
    }

    /**
     * Cancels all events.
     */
    async deleteEventsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/events`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Cancels all events.
     */
    async deleteEvents(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteEventsRaw(initOverrides);
    }

    /**
     * Delete a rule.
     */
    async deleteRuleRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a rule.
     */
    async deleteRule(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRuleRaw(id, initOverrides);
    }

    /**
     * Cancels all rule events.
     */
    async deleteRuleEventsRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/{id}/events`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Cancels all rule events.
     */
    async deleteRuleEvents(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRuleEventsRaw(id, initOverrides);
    }

    /**
     * Cancel the current run.
     */
    async deleteRuleRunRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/run`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Cancel the current run.
     */
    async deleteRuleRun(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRuleRunRaw(initOverrides);
    }

    /**
     * Disable a rule.
     */
    async disableRuleRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleDto>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/{id}/disable`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleDtoFromJSON(jsonValue));
    }

    /**
     * Disable a rule.
     */
    async disableRule(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleDto> {
        const response = await this.disableRuleRaw(id, initOverrides);
        return await response.value();
    }

    /**
     * Enable a rule.
     */
    async enableRuleRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleDto>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/{id}/enable`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleDtoFromJSON(jsonValue));
    }

    /**
     * Enable a rule.
     */
    async enableRule(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleDto> {
        const response = await this.enableRuleRaw(id, initOverrides);
        return await response.value();
    }

    /**
     * Get supported rule actions.
     */
    async getActionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: RuleElementDto; }>> {

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rules/actions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => runtime.mapValues(jsonValue, RuleElementDtoFromJSON));
    }

    /**
     * Get supported rule actions.
     */
    async getActions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: RuleElementDto; }> {
        const response = await this.getActionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Provide the json schema for the event with the specified name.
     */
    async getEventSchemaRaw(type: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const _type = type;

        if (_type == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rules/eventtypes/{type}`.replace(`{${"type"}}`, encodeURIComponent(String(_type))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Provide the json schema for the event with the specified name.
     */
    async getEventSchema(type: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getEventSchemaRaw(type, initOverrides);
        return await response.value();
    }

    /**
     * Provide a list of all event types that are used in rules.
     */
    async getEventTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rules/eventtypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Provide a list of all event types that are used in rules.
     */
    async getEventTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.getEventTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get rule events.
     */
    async getEventsRaw(requestParameters: RulesGetEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleEventsDto>> {
        const _ruleId = requestParameters?.['ruleId'];
        const _skip = requestParameters?.['skip'];
        const _take = requestParameters?.['take'];

        const queryParameters: any = {};

        if (_ruleId != null) {
            queryParameters['ruleId'] = _ruleId;
        }

        if (_skip != null) {
            queryParameters['skip'] = _skip;
        }

        if (_take != null) {
            queryParameters['take'] = _take;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleEventsDtoFromJSON(jsonValue));
    }

    /**
     * Get rule events.
     */
    async getEvents(requestParameters: RulesGetEventsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleEventsDto> {
        const response = await this.getEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get rules.
     */
    async getRulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RulesDto>> {

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RulesDtoFromJSON(jsonValue));
    }

    /**
     * Get rules.
     */
    async getRules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RulesDto> {
        const response = await this.getRulesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Create a new rule.
     */
    async postRuleRaw(createRuleDto: CreateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleDto>> {
        const _createRuleDto = createRuleDto;

        if (_createRuleDto == null) {
            throw new runtime.RequiredError(
                'createRuleDto',
                'Required parameter "createRuleDto" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/apps/$app$/rules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRuleDtoToJSON(_createRuleDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleDtoFromJSON(jsonValue));
    }

    /**
     * Create a new rule.
     */
    async postRule(createRuleDto: CreateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleDto> {
        const response = await this.postRuleRaw(createRuleDto, initOverrides);
        return await response.value();
    }

    /**
     * Retry the event immediately.
     */
    async putEventRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/events/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retry the event immediately.
     */
    async putEvent(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putEventRaw(id, initOverrides);
    }

    /**
     * Update a rule.
     */
    async putRuleRaw(id: string, updateRuleDto: UpdateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleDto>> {
        const _id = id;
        const _updateRuleDto = updateRuleDto;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        if (_updateRuleDto == null) {
            throw new runtime.RequiredError(
                'updateRuleDto',
                'Required parameter "updateRuleDto" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/apps/$app$/rules/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateRuleDtoToJSON(_updateRuleDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleDtoFromJSON(jsonValue));
    }

    /**
     * Update a rule.
     */
    async putRule(id: string, updateRuleDto: UpdateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleDto> {
        const response = await this.putRuleRaw(id, updateRuleDto, initOverrides);
        return await response.value();
    }

    /**
     * Run a rule.
     */
    async putRuleRunRaw(id: string, requestParameters: RulesPutRuleRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const _id = id;
        const _fromSnapshots = requestParameters?.['fromSnapshots'];

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        if (_fromSnapshots != null) {
            queryParameters['fromSnapshots'] = _fromSnapshots;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/{id}/run`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Run a rule.
     */
    async putRuleRun(id: string, requestParameters: RulesPutRuleRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putRuleRunRaw(id, requestParameters, initOverrides);
    }

    /**
     * Simulate a rule.
     */
    async simulateGETRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimulatedRuleEventsDto>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/{id}/simulate`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SimulatedRuleEventsDtoFromJSON(jsonValue));
    }

    /**
     * Simulate a rule.
     */
    async simulateGET(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimulatedRuleEventsDto> {
        const response = await this.simulateGETRaw(id, initOverrides);
        return await response.value();
    }

    /**
     * Simulate a rule.
     */
    async simulatePOSTRaw(createRuleDto: CreateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimulatedRuleEventsDto>> {
        const _createRuleDto = createRuleDto;

        if (_createRuleDto == null) {
            throw new runtime.RequiredError(
                'createRuleDto',
                'Required parameter "createRuleDto" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/apps/$app$/rules/simulate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRuleDtoToJSON(_createRuleDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SimulatedRuleEventsDtoFromJSON(jsonValue));
    }

    /**
     * Simulate a rule.
     */
    async simulatePOST(createRuleDto: CreateRuleDto, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimulatedRuleEventsDto> {
        const response = await this.simulatePOSTRaw(createRuleDto, initOverrides);
        return await response.value();
    }

    /**
     * Trigger a rule.
     */
    async triggerRuleRaw(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const _id = id;

        if (_id == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/apps/$app$/rules/{id}/trigger`.replace(`{${"id"}}`, encodeURIComponent(String(_id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Trigger a rule.
     */
    async triggerRule(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.triggerRuleRaw(id, initOverrides);
    }

}
