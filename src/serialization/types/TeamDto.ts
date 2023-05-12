/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const TeamDto: core.serialization.ObjectSchema<serializers.TeamDto.Raw, Squidex.TeamDto> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        version: core.serialization.number(),
        created: core.serialization.string(),
        lastModified: core.serialization.string(),
        roleName: core.serialization.string().optional(),
    });

export declare namespace TeamDto {
    interface Raw {
        id: string;
        name: string;
        version: number;
        created: string;
        lastModified: string;
        roleName?: string | null;
    }
}
