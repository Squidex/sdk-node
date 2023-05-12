/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ElasticSearchRuleActionDto {
    /** The url to the instance or cluster. */
    host: string;
    /** The name of the index. */
    indexName: string;
    /** The optional username. */
    username: string;
    /** The optional password. */
    password: string;
    /** The optional custom document. */
    document: string;
    /** The condition when to delete the document. */
    delete: string;
}
