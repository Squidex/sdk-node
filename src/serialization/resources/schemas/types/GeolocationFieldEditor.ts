/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const GeolocationFieldEditor: core.serialization.Schema<
    serializers.GeolocationFieldEditor.Raw,
    Squidex.GeolocationFieldEditor
> = core.serialization.enum_(["Map"]);

export declare namespace GeolocationFieldEditor {
    type Raw = "Map";
}