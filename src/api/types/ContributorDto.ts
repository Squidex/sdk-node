/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface ContributorDto extends Squidex.Resource {
    /** The ID of the user that contributes to the app. */
    contributorId: string;
    /** The display name. */
    contributorName: string;
    /** The email address. */
    contributorEmail: string;
    /** The role of the contributor. */
    role?: string;
}
