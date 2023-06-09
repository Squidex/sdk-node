/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SchemaScriptsDto {
    /** The script that is executed for each content when querying contents. */
    query?: string;
    /** The script that is executed for all contents when querying contents. */
    queryPre?: string;
    /** The script that is executed when creating a content. */
    create?: string;
    /** The script that is executed when updating a content. */
    update?: string;
    /** The script that is executed when deleting a content. */
    delete?: string;
    /** The script that is executed when change a content status. */
    change?: string;
}
