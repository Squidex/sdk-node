/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UpdateClientDto {
    /** The new display name of the client. */
    name?: string;
    /** The role of the client. */
    role?: string;
    /** True to allow anonymous access without an access token for this client. */
    allowAnonymous?: boolean;
    /** The number of allowed api calls per month for this client. */
    apiCallsLimit?: number;
    /** The number of allowed api traffic bytes per month for this client. */
    apiTrafficLimit?: number;
}
