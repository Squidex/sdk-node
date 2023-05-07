/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const AllContentsByPostDto: core.serialization.ObjectSchema<
    serializers.AllContentsByPostDto.Raw,
    Squidex.AllContentsByPostDto
> = core.serialization.object({
    ids: core.serialization.list(core.serialization.string()).optional(),
    scheduledFrom: core.serialization.string().optional(),
    scheduledTo: core.serialization.string().optional(),
    referencing: core.serialization.string().optional(),
    references: core.serialization.string().optional(),
    oData: core.serialization.string().optional(),
    q: core.serialization.unknown(),
});

export declare namespace AllContentsByPostDto {
    interface Raw {
        ids?: string[] | null;
        scheduledFrom?: string | null;
        scheduledTo?: string | null;
        referencing?: string | null;
        references?: string | null;
        oData?: string | null;
        q?: unknown;
    }
}