/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SquidexApi } from "@fern-api/squidex";
import * as core from "../../../../core";

export const BulkUpdateAssetType: core.serialization.Schema<
    serializers.BulkUpdateAssetType.Raw,
    SquidexApi.BulkUpdateAssetType
> = core.serialization.enum_(["Annotate", "Move", "Delete"]);

export declare namespace BulkUpdateAssetType {
    type Raw = "Annotate" | "Move" | "Delete";
}
