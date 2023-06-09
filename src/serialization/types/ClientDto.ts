/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ClientDto: core.serialization.ObjectSchema<serializers.ClientDto.Raw, Squidex.ClientDto> =
    core.serialization
        .object({
            id: core.serialization.string(),
            secret: core.serialization.string(),
            name: core.serialization.string(),
            role: core.serialization.string().optional(),
            apiCallsLimit: core.serialization.number(),
            apiTrafficLimit: core.serialization.number(),
            allowAnonymous: core.serialization.boolean(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("..")).Resource));

export declare namespace ClientDto {
    interface Raw extends serializers.Resource.Raw {
        id: string;
        secret: string;
        name: string;
        role?: string | null;
        apiCallsLimit: number;
        apiTrafficLimit: number;
        allowAnonymous: boolean;
    }
}
