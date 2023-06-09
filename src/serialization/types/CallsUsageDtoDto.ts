/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const CallsUsageDtoDto: core.serialization.ObjectSchema<
    serializers.CallsUsageDtoDto.Raw,
    Squidex.CallsUsageDtoDto
> = core.serialization.object({
    totalCalls: core.serialization.number(),
    totalBytes: core.serialization.number(),
    monthCalls: core.serialization.number(),
    monthBytes: core.serialization.number(),
    blockingApiCalls: core.serialization.number(),
    allowedBytes: core.serialization.number(),
    allowedCalls: core.serialization.number(),
    averageElapsedMs: core.serialization.number(),
    details: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).CallsUsagePerDateDto))
    ),
});

export declare namespace CallsUsageDtoDto {
    interface Raw {
        totalCalls: number;
        totalBytes: number;
        monthCalls: number;
        monthBytes: number;
        blockingApiCalls: number;
        allowedBytes: number;
        allowedCalls: number;
        averageElapsedMs: number;
        details: Record<string, serializers.CallsUsagePerDateDto.Raw[]>;
    }
}
