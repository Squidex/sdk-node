/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "../../../..";

export interface ContentsPostContentRequest {
    status?: string;
    id?: string;
    publish?: boolean;
    body: Record<string, Squidex.ContentFieldData>;
}