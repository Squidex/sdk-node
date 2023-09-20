/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface ContentDto extends Squidex.Resource {
    /** The if of the content item. */
    id: string;
    /** The user that has created the content item. */
    createdBy: string;
    /** The user that has updated the content item. */
    lastModifiedBy: string;
    data?: unknown;
    /** The reference data for the frontend UI. */
    referenceData?: Squidex.ContentData;
    /** The date and time when the content item has been created. */
    created: Date;
    /** The date and time when the content item has been modified last. */
    lastModified: Date;
    /** The status of the content. */
    status: string;
    /** The new status of the content. */
    newStatus?: string;
    /** The color of the status. */
    statusColor: string;
    /** The color of the new status. */
    newStatusColor?: string;
    /** The UI token. */
    editToken?: string;
    /** The scheduled status. */
    scheduleJob?: Squidex.ScheduleJobDto;
    /** The ID of the schema. */
    schemaId: string;
    /** The name of the schema. */
    schemaName?: string;
    /** The display name of the schema. */
    schemaDisplayName?: string;
    /** The reference fields. */
    referenceFields?: Squidex.FieldDto[];
    /** Indicates whether the content is deleted. */
    isDeleted: boolean;
    /** The version of the content. */
    version: number;
}
