/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "../../../..";

export interface CreateSchemaDto {
    /** The name of the schema. */
    name: string;
    type: Squidex.SchemaType;
    /** Set to true to allow a single content item only. */
    isSingleton: boolean;
}
