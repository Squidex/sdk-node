/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AzureQueueRuleActionDto {
    /** The connection string to the storage account. */
    connectionString: string;
    /** The name of the queue. */
    queue: string;
    /** Leave it empty to use the full event as body. */
    payload: string;
}
