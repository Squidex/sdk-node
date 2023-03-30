/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SquidexApi } from "@fern-api/squidex";

export interface BulkUpdateAssetsJobDto {
    /** An optional ID of the asset to update. */
    id?: string;
    type?: SquidexApi.BulkUpdateAssetType;
    /** The parent folder id. */
    parentId?: string;
    /** The new name of the asset. */
    fileName?: string;
    /** The new slug of the asset. */
    slug?: string;
    /** True, when the asset is not public. */
    isProtected?: boolean;
    /** The new asset tags. */
    tags?: string[];
    /** The asset metadata. */
    metadata?: Record<string, unknown>;
    /** True to delete the asset permanently. */
    permanent?: boolean;
    /** The expected version. */
    expectedVersion?: number;
}
