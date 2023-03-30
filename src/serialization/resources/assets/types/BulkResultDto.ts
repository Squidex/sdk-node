/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SquidexApi } from "@fern-api/squidex";
import * as core from "../../../../core";

export const BulkResultDto: core.serialization.ObjectSchema<serializers.BulkResultDto.Raw, SquidexApi.BulkResultDto> =
    core.serialization.object({
        error: core.serialization.lazyObject(async () => (await import("../../..")).ErrorDto).optional(),
        jobIndex: core.serialization.number().optional(),
        id: core.serialization.string().optional(),
        contentId: core.serialization.string().optional(),
    });

export declare namespace BulkResultDto {
    interface Raw {
        error?: serializers.ErrorDto.Raw | null;
        jobIndex?: number | null;
        id?: string | null;
        contentId?: string | null;
    }
}
