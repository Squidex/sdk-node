/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Squidex from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.statistics.usagesGetStorageSizes.Response.Raw,
    Squidex.StorageUsagePerDateDto[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).StorageUsagePerDateDto)
);

export declare namespace Response {
    type Raw = serializers.StorageUsagePerDateDto.Raw[];
}