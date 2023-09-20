/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CommentDto {
    /** The ID of the comment. */
    id: string;
    /** The time when the comment was created or updated last. */
    time: Date;
    /** The user who created or updated the comment. */
    user: string;
    /** The text of the comment. */
    text: string;
    /** The url where the comment is created. */
    url?: string;
}
