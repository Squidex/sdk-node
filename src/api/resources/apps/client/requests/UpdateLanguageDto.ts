/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UpdateLanguageDto {
    /** Set the value to true to make the language the master. */
    isMaster?: boolean;
    /** Set the value to true to make the language optional. */
    isOptional?: boolean;
    /** Optional fallback languages. */
    fallback?: string[];
}
