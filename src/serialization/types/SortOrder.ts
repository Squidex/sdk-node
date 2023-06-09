/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const SortOrder: core.serialization.Schema<serializers.SortOrder.Raw, Squidex.SortOrder> =
    core.serialization.enum_(["Ascending", "Descending"]);

export declare namespace SortOrder {
    type Raw = "Ascending" | "Descending";
}
