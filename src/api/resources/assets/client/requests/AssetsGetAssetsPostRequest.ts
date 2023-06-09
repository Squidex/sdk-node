/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "../../../..";

export interface AssetsGetAssetsPostRequest {
    /**
     * Do not return the total amount.
     */
    noTotal?: boolean;
    /**
     * Do not return the total amount, if it would be slow.
     */
    noSlowTotal?: boolean;
    body: Squidex.QueryDto;
}
