/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface OpenSearchRuleActionDto {
    /** The url to the instance or cluster. <span style="white-space: nowrap">`non-empty`</span> */
    host: string;
    /** The name of the index. <span style="white-space: nowrap">`non-empty`</span> */
    indexName: string;
    /** The optional username. */
    username?: string;
    /** The optional password. */
    password?: string;
    /** The optional custom document. */
    document?: string;
    /** The condition when to delete the document. */
    delete?: string;
}
