/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface BulkResultDto {
    /** The error when the bulk job failed. */
    error?: Squidex.ErrorDto;
    /** The index of the bulk job where the result belongs to. The order can change. */
    jobIndex: number;
    /** The ID of the entity that has been handled successfully or not. */
    id?: string;
    /** The ID of the entity that has been handled successfully or not. */
    contentId?: string;
}
