/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SquidexApi } from "@fern-api/squidex";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.apps.getTeamApps.Response.Raw, SquidexApi.AppDto[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).AppDto));

export declare namespace Response {
    type Raw = serializers.AppDto.Raw[];
}
