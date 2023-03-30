/**
 * This file was auto-generated by Fern from our API Definition.
 */

export class SquidexApiError extends Error {
    readonly statusCode?: number;
    readonly body?: unknown;

    constructor({ message, statusCode, body }: { message?: string; statusCode?: number; body?: unknown }) {
        super(message);
        Object.setPrototypeOf(this, SquidexApiError.prototype);
        if (statusCode != null) {
            this.statusCode = statusCode;
        }

        if (body !== undefined) {
            this.body = body;
        }
    }
}
