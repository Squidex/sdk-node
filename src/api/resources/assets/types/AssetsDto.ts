/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SquidexApi } from "@fern-api/squidex";

export interface AssetsDto extends SquidexApi.Resource {
    /** The total number of assets. */
    total?: number;
    /** The assets. */
    items: SquidexApi.AssetDto[];
}
