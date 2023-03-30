/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SquidexApi } from "@fern-api/squidex";

export interface SearchResultDto extends SquidexApi.Resource {
    /** The name of the search result. */
    name: string;
    type: SquidexApi.SearchResultType;
    /** An optional label. */
    label?: string;
}
