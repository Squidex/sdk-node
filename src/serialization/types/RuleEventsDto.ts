/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const RuleEventsDto: core.serialization.ObjectSchema<serializers.RuleEventsDto.Raw, Squidex.RuleEventsDto> =
    core.serialization.object({
        total: core.serialization.number().optional(),
        items: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).RuleEventDto))
            .optional(),
    });

export declare namespace RuleEventsDto {
    interface Raw {
        total?: number | null;
        items?: serializers.RuleEventDto.Raw[] | null;
    }
}