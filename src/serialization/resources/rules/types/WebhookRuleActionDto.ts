/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const WebhookRuleActionDto: core.serialization.ObjectSchema<
    serializers.WebhookRuleActionDto.Raw,
    Squidex.WebhookRuleActionDto
> = core.serialization.object({
    url: core.serialization.string(),
    method: core.serialization.lazy(async () => (await import("../../..")).WebhookMethod),
    payload: core.serialization.string().optional(),
    payloadType: core.serialization.string().optional(),
    headers: core.serialization.string().optional(),
    sharedSecret: core.serialization.string().optional(),
});

export declare namespace WebhookRuleActionDto {
    interface Raw {
        url: string;
        method: serializers.WebhookMethod.Raw;
        payload?: string | null;
        payloadType?: string | null;
        headers?: string | null;
        sharedSecret?: string | null;
    }
}