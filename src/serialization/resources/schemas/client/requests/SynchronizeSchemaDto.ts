/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const SynchronizeSchemaDto: core.serialization.Schema<
    serializers.SynchronizeSchemaDto.Raw,
    Squidex.SynchronizeSchemaDto
> = core.serialization
    .object({
        noFieldDeletion: core.serialization.boolean().optional(),
        noFieldRecreation: core.serialization.boolean().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../..")).UpsertSchemaDto));

export declare namespace SynchronizeSchemaDto {
    interface Raw extends serializers.UpsertSchemaDto.Raw {
        noFieldDeletion?: boolean | null;
        noFieldRecreation?: boolean | null;
    }
}
