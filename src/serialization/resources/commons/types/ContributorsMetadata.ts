/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SquidexApi } from "@fern-api/squidex";
import * as core from "../../../../core";

export const ContributorsMetadata: core.serialization.ObjectSchema<
    serializers.ContributorsMetadata.Raw,
    SquidexApi.ContributorsMetadata
> = core.serialization.object({
    isInvited: core.serialization.string().optional(),
});

export declare namespace ContributorsMetadata {
    interface Raw {
        isInvited?: string | null;
    }
}
