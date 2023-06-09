/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ContentData: core.serialization.Schema<serializers.ContentData.Raw, Squidex.ContentData> =
    core.serialization.record(
        core.serialization.string(),
        core.serialization.lazy(async () => (await import("..")).ContentFieldData)
    );

export declare namespace ContentData {
    type Raw = Record<string, serializers.ContentFieldData.Raw>;
}
