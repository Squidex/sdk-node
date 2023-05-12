/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const AppSettingsDto: core.serialization.ObjectSchema<serializers.AppSettingsDto.Raw, Squidex.AppSettingsDto> =
    core.serialization.object({
        patterns: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).PatternDto)),
        editors: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).EditorDto)),
        hideScheduler: core.serialization.boolean(),
        hideDateTimeModeButton: core.serialization.boolean(),
        version: core.serialization.number(),
    });

export declare namespace AppSettingsDto {
    interface Raw {
        patterns: serializers.PatternDto.Raw[];
        editors: serializers.EditorDto.Raw[];
        hideScheduler: boolean;
        hideDateTimeModeButton: boolean;
        version: number;
    }
}
