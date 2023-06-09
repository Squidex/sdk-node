/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const AssetChangedRuleTriggerDto: core.serialization.ObjectSchema<
    serializers.AssetChangedRuleTriggerDto.Raw,
    Squidex.AssetChangedRuleTriggerDto
> = core.serialization.object({
    condition: core.serialization.string().optional(),
});

export declare namespace AssetChangedRuleTriggerDto {
    interface Raw {
        condition?: string | null;
    }
}
