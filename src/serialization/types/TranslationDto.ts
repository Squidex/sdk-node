/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const TranslationDto: core.serialization.ObjectSchema<serializers.TranslationDto.Raw, Squidex.TranslationDto> =
    core.serialization.object({
        status: core.serialization.lazy(async () => (await import("..")).TranslationStatus),
        result: core.serialization.lazy(async () => (await import("..")).TranslationStatus),
        text: core.serialization.string().optional(),
    });

export declare namespace TranslationDto {
    interface Raw {
        status: serializers.TranslationStatus.Raw;
        result: serializers.TranslationStatus.Raw;
        text?: string | null;
    }
}
