/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "../../../..";

export interface SynchronizeSchemaDto extends Squidex.UpsertSchemaDto {
    /** True, when fields should not be deleted. */
    noFieldDeletion?: boolean;
    /** True, when fields with different types should not be recreated. */
    noFieldRecreation?: boolean;
}
