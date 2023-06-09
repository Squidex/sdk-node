/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface TemplateDto extends Squidex.Resource {
    /** The name of the template. */
    name: string;
    /** The title of the template. */
    title: string;
    /** The description of the template. */
    description: string;
    /** True, if the template is a starter. */
    isStarter: boolean;
}
