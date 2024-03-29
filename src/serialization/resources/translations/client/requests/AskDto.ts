/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const AskDto: core.serialization.Schema<serializers.AskDto.Raw, Squidex.AskDto> = core.serialization.object({
    prompt: core.serialization.string(),
});

export declare namespace AskDto {
    interface Raw {
        prompt: string;
    }
}
