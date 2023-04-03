/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const LocalizedValueOfReadonlyListOfString: core.serialization.Schema<
    serializers.LocalizedValueOfReadonlyListOfString.Raw,
    Squidex.LocalizedValueOfReadonlyListOfString
> = core.serialization.record(core.serialization.string(), core.serialization.list(core.serialization.string()));

export declare namespace LocalizedValueOfReadonlyListOfString {
    type Raw = Record<string, string[]>;
}