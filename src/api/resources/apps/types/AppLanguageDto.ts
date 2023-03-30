/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SquidexApi } from "@fern-api/squidex";

export interface AppLanguageDto extends SquidexApi.Resource {
    /** The iso code of the language. */
    iso2Code: string;
    /** The english name of the language. */
    englishName: string;
    /** The fallback languages. */
    fallback: string[];
    /** Indicates if the language is the master language. */
    isMaster?: boolean;
    /** Indicates if the language is optional. */
    isOptional?: boolean;
}
