/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const UserProperty: core.serialization.ObjectSchema<serializers.UserProperty.Raw, Squidex.UserProperty> =
    core.serialization.object({
        name: core.serialization.string(),
        value: core.serialization.string(),
    });

export declare namespace UserProperty {
    interface Raw {
        name: string;
        value: string;
    }
}
