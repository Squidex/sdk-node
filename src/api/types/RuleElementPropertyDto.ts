/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface RuleElementPropertyDto {
    /** The html editor. */
    editor: Squidex.RuleFieldEditor;
    /** The name of the editor. */
    name: string;
    /** The label to use. */
    display: string;
    /** The options, if the editor is a dropdown. */
    options?: string[];
    /** The optional description. */
    description?: string;
    /** Indicates if the property is formattable. */
    isFormattable: boolean;
    /** Indicates if the property is required. */
    isRequired: boolean;
}
