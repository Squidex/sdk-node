/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CallsUsagePerDateDto {
    /** The date when the usage was tracked. */
    date: string;
    /** The total number of API calls. */
    totalCalls: number;
    /** The total number of bytes transferred. */
    totalBytes: number;
    /** The average duration in milliseconds. */
    averageElapsedMs: number;
}
