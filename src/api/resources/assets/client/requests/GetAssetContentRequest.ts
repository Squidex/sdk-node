/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SquidexApi } from "@fern-api/squidex";

export interface GetAssetContentRequest {
    /**
     * The optional version of the asset.
     */
    version?: number;
    /**
     * The cache duration in seconds.
     */
    cache?: number;
    /**
     * Set it to 0 to prevent download.
     */
    download?: number;
    /**
     * The target width of the asset, if it is an image.
     */
    width?: number;
    /**
     * The target height of the asset, if it is an image.
     */
    height?: number;
    /**
     * Optional image quality, it is is an jpeg image.
     */
    quality?: number;
    /**
     * The resize mode when the width and height is defined.
     */
    mode?: SquidexApi.ResizeMode;
    /**
     * Optional background color.
     */
    bg?: string;
    /**
     * Override the y focus point.
     */
    focusX?: number;
    /**
     * Override the x focus point.
     */
    focusY?: number;
    /**
     * True to ignore the asset focus point if any.
     */
    nofocus?: boolean;
    /**
     * True to use auto format.
     */
    auto?: boolean;
    /**
     * True to force a new resize even if it already stored.
     */
    force?: boolean;
    /**
     * True to force a new resize even if it already stored.
     */
    format?: SquidexApi.ImageFormat;
}
