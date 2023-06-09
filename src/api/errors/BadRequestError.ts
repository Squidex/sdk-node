/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as Squidex from "..";

export class BadRequestError extends errors.SquidexError {
    constructor(body: Squidex.ErrorDto) {
        super({
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
