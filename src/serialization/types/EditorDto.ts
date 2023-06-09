/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const EditorDto: core.serialization.ObjectSchema<serializers.EditorDto.Raw, Squidex.EditorDto> =
    core.serialization.object({
        name: core.serialization.string(),
        url: core.serialization.string(),
    });

export declare namespace EditorDto {
    interface Raw {
        name: string;
        url: string;
    }
}
