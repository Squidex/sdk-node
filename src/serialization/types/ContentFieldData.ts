/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ContentFieldData: core.serialization.Schema<serializers.ContentFieldData.Raw, Squidex.ContentFieldData> =
    core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace ContentFieldData {
    type Raw = Record<string, unknown>;
}
