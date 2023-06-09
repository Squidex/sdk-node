/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ResizeMode: core.serialization.Schema<serializers.ResizeMode.Raw, Squidex.ResizeMode> =
    core.serialization.enum_(["Crop", "CropUpsize", "Pad", "BoxPad", "Max", "Min", "Stretch"]);

export declare namespace ResizeMode {
    type Raw = "Crop" | "CropUpsize" | "Pad" | "BoxPad" | "Max" | "Min" | "Stretch";
}
