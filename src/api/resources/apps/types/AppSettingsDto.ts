/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SquidexApi } from "@fern-api/squidex";

export interface AppSettingsDto extends SquidexApi.Resource {
    /** The configured app patterns. */
    patterns: SquidexApi.PatternDto[];
    /** The configured UI editors. */
    editors: SquidexApi.EditorDto[];
    /** Hide the scheduler for content items. */
    hideScheduler?: boolean;
    /** Hide the datetime mode button. */
    hideDateTimeModeButton?: boolean;
    /** The version of the app. */
    version?: number;
}
