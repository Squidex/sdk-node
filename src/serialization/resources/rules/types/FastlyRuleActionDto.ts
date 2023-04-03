/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const FastlyRuleActionDto: core.serialization.ObjectSchema<
    serializers.FastlyRuleActionDto.Raw,
    Squidex.FastlyRuleActionDto
> = core.serialization.object({
    apiKey: core.serialization.string(),
    serviceId: core.serialization.string(),
});

export declare namespace FastlyRuleActionDto {
    interface Raw {
        apiKey: string;
        serviceId: string;
    }
}