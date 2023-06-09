/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../core";
import * as serializers from "..";
import * as Squidex from "../../api";

const _Base = core.serialization.object({
    label: core.serialization.string().optional(),
    hints: core.serialization.string().optional(),
    placeholder: core.serialization.string().optional(),
    isRequired: core.serialization.boolean().optional(),
    isRequiredOnPublish: core.serialization.boolean().optional(),
    isHalfWidth: core.serialization.boolean().optional(),
    editorUrl: core.serialization.string().optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
});
export const FieldPropertiesDto: core.serialization.Schema<
    serializers.FieldPropertiesDto.Raw,
    Squidex.FieldPropertiesDto
> = core.serialization
    .union("fieldType", {
        Array: core.serialization.lazyObject(async () => (await import("..")).ArrayFieldPropertiesDto).extend(_Base),
        Assets: core.serialization.lazyObject(async () => (await import("..")).AssetsFieldPropertiesDto).extend(_Base),
        Boolean: core.serialization
            .lazyObject(async () => (await import("..")).BooleanFieldPropertiesDto)
            .extend(_Base),
        Component: core.serialization
            .lazyObject(async () => (await import("..")).ComponentFieldPropertiesDto)
            .extend(_Base),
        Components: core.serialization
            .lazyObject(async () => (await import("..")).ComponentsFieldPropertiesDto)
            .extend(_Base),
        DateTime: core.serialization
            .lazyObject(async () => (await import("..")).DateTimeFieldPropertiesDto)
            .extend(_Base),
        Geolocation: core.serialization
            .lazyObject(async () => (await import("..")).GeolocationFieldPropertiesDto)
            .extend(_Base),
        Json: core.serialization.lazyObject(async () => (await import("..")).JsonFieldPropertiesDto).extend(_Base),
        Number: core.serialization.lazyObject(async () => (await import("..")).NumberFieldPropertiesDto).extend(_Base),
        References: core.serialization
            .lazyObject(async () => (await import("..")).ReferencesFieldPropertiesDto)
            .extend(_Base),
        String: core.serialization.lazyObject(async () => (await import("..")).StringFieldPropertiesDto).extend(_Base),
        Tags: core.serialization.lazyObject(async () => (await import("..")).TagsFieldPropertiesDto).extend(_Base),
        UI: core.serialization.lazyObject(async () => (await import("..")).UiFieldPropertiesDto).extend(_Base),
    })
    .transform<Squidex.FieldPropertiesDto>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace FieldPropertiesDto {
    type Raw =
        | FieldPropertiesDto.Array
        | FieldPropertiesDto.Assets
        | FieldPropertiesDto.Boolean
        | FieldPropertiesDto.Component
        | FieldPropertiesDto.Components
        | FieldPropertiesDto.DateTime
        | FieldPropertiesDto.Geolocation
        | FieldPropertiesDto.Json
        | FieldPropertiesDto.Number
        | FieldPropertiesDto.References
        | FieldPropertiesDto.String
        | FieldPropertiesDto.Tags
        | FieldPropertiesDto.Ui;

    interface Array extends _Base, serializers.ArrayFieldPropertiesDto.Raw {
        fieldType: "Array";
    }

    interface Assets extends _Base, serializers.AssetsFieldPropertiesDto.Raw {
        fieldType: "Assets";
    }

    interface Boolean extends _Base, serializers.BooleanFieldPropertiesDto.Raw {
        fieldType: "Boolean";
    }

    interface Component extends _Base, serializers.ComponentFieldPropertiesDto.Raw {
        fieldType: "Component";
    }

    interface Components extends _Base, serializers.ComponentsFieldPropertiesDto.Raw {
        fieldType: "Components";
    }

    interface DateTime extends _Base, serializers.DateTimeFieldPropertiesDto.Raw {
        fieldType: "DateTime";
    }

    interface Geolocation extends _Base, serializers.GeolocationFieldPropertiesDto.Raw {
        fieldType: "Geolocation";
    }

    interface Json extends _Base, serializers.JsonFieldPropertiesDto.Raw {
        fieldType: "Json";
    }

    interface Number extends _Base, serializers.NumberFieldPropertiesDto.Raw {
        fieldType: "Number";
    }

    interface References extends _Base, serializers.ReferencesFieldPropertiesDto.Raw {
        fieldType: "References";
    }

    interface String extends _Base, serializers.StringFieldPropertiesDto.Raw {
        fieldType: "String";
    }

    interface Tags extends _Base, serializers.TagsFieldPropertiesDto.Raw {
        fieldType: "Tags";
    }

    interface Ui extends _Base, serializers.UiFieldPropertiesDto.Raw {
        fieldType: "UI";
    }

    interface _Base {
        label?: string | null;
        hints?: string | null;
        placeholder?: string | null;
        isRequired?: boolean | null;
        isRequiredOnPublish?: boolean | null;
        isHalfWidth?: boolean | null;
        editorUrl?: string | null;
        tags?: string[] | null;
    }
}
