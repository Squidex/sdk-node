/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const JsonFieldPropertiesDto: core.serialization.ObjectSchema<
    serializers.JsonFieldPropertiesDto.Raw,
    Squidex.JsonFieldPropertiesDto
> = core.serialization.object({
    graphQlSchema: core.serialization.property("graphQLSchema", core.serialization.string().optional()),
});

export declare namespace JsonFieldPropertiesDto {
    interface Raw {
        graphQLSchema?: string | null;
    }
}
