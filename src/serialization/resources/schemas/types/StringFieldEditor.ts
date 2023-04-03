/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const StringFieldEditor: core.serialization.Schema<
    serializers.StringFieldEditor.Raw,
    Squidex.StringFieldEditor
> = core.serialization.enum_([
    "Input",
    "Color",
    "Markdown",
    "Dropdown",
    "Html",
    "Radio",
    "RichText",
    "Slug",
    "StockPhoto",
    "TextArea",
]);

export declare namespace StringFieldEditor {
    type Raw =
        | "Input"
        | "Color"
        | "Markdown"
        | "Dropdown"
        | "Html"
        | "Radio"
        | "RichText"
        | "Slug"
        | "StockPhoto"
        | "TextArea";
}