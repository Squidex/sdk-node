/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateAppDto {
    /** The name of the app. <span style="white-space: nowrap">`non-empty`</span> */
    name: string;
    /** Initialize the app with the inbuilt template. */
    template?: string;
}
