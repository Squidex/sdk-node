/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SquidexApi } from "@fern-api/squidex";
import * as core from "../../../../core";

export const UpdateClientDto: core.serialization.ObjectSchema<
    serializers.UpdateClientDto.Raw,
    SquidexApi.UpdateClientDto
> = core.serialization.object({
    name: core.serialization.string().optional(),
    role: core.serialization.string().optional(),
    allowAnonymous: core.serialization.boolean().optional(),
    apiCallsLimit: core.serialization.number().optional(),
    apiTrafficLimit: core.serialization.number().optional(),
});

export declare namespace UpdateClientDto {
    interface Raw {
        name?: string | null;
        role?: string | null;
        allowAnonymous?: boolean | null;
        apiCallsLimit?: number | null;
        apiTrafficLimit?: number | null;
    }
}
