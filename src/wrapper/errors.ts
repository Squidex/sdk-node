import { ErrorDto, FetchError, RequiredError, ResponseError } from "../generated";

export class SquidexError<T = unknown> extends Error {
    constructor(
        public readonly statusCode?: number,
        public readonly body?: T,
        public readonly cause?: Error,
        message?: string
    ) {
        super(buildMessage(statusCode, body, message, cause));

        Object.setPrototypeOf(this, SquidexError.prototype);

        if (statusCode != null) {
            this.statusCode = statusCode;
        }

        if (body !== undefined) {
            this.body = body;
        }
    }
}

export class SquidexBadRequestError extends SquidexError<ErrorDto> {
    constructor(body?: ErrorDto, cause?: ResponseError) {
        super(400, body, cause);
        Object.setPrototypeOf(this, SquidexBadRequestError.prototype);
    }
}

export class SquidexForbiddenError extends SquidexError<ErrorDto> {
    constructor(body?: ErrorDto, cause?: ResponseError) {
        super(403, body, cause);
        Object.setPrototypeOf(this, SquidexForbiddenError.prototype);
    }
}

export class SquidexUnauthorizedError extends SquidexError<ErrorDto> {
    constructor(body?: ErrorDto, cause?: ResponseError, message?: string) {
        super(401, body, cause, message);
        Object.setPrototypeOf(this, SquidexUnauthorizedError.prototype);
    }
}

export class SquidexConflictError extends SquidexError<ErrorDto> {
    constructor(body: ErrorDto, cause: ResponseError) {
        super(409, body, cause);
        Object.setPrototypeOf(this, SquidexConflictError.prototype);
    }
}

export class SquidexContentTooLargeError extends SquidexError<ErrorDto> {
    constructor(body?: ErrorDto, cause?: ResponseError) {
        super(413, body, cause);
        Object.setPrototypeOf(this, SquidexContentTooLargeError.prototype);
    }
}

export class SquidexInternalServerError extends SquidexError<ErrorDto> {
    constructor(body?: ErrorDto, cause?: ResponseError) {
        super(500, body, cause, cause?.message);
        Object.setPrototypeOf(this, SquidexInternalServerError.prototype);
    }
}

export class SquidexNotFoundError extends SquidexError {
    constructor(cause?: ResponseError) {
        super(404, undefined, cause);
        Object.setPrototypeOf(this, SquidexNotFoundError.prototype);
    }
}

export class SquidexRequiredFieldError extends SquidexError {
    constructor(cause?: RequiredError) {
        super(undefined, undefined, cause);
        Object.setPrototypeOf(this, SquidexNotFoundError.prototype);
    }
}

export async function buildError(error: unknown) {
    if (error instanceof FetchError) {
        return new SquidexError(undefined, undefined, error, error.message);
    } else if (error instanceof RequiredError) {
        return new SquidexRequiredFieldError(error);
    } else if (error instanceof ResponseError) {
        const statusCode = error.response.status;

        let body: ErrorDto;
        try {
            body = await error.response.json();
        } catch {
            body = { message: "No error details provided.", statusCode };
        }

        switch (error.response.status) {
            case 400:
                return new SquidexBadRequestError(body, error);
            case 401:
                return new SquidexUnauthorizedError(body, error);
            case 403:
                return new SquidexForbiddenError(body, error);
            case 404:
                return new SquidexNotFoundError(error);
            case 409:
                return new SquidexConflictError(body, error);
            case 413:
                return new SquidexContentTooLargeError(body, error);
            default:
                return new SquidexError(statusCode, body, error, `Exception failed with status code ${statusCode}.`);
        }
    } else {
        return new SquidexError(undefined, undefined, error as any);
    }
}

function buildMessage(statusCode?: number, body?: unknown, message?: string, cause?: Error): string {
    let lines: string[] = [];
    if (message) {
        lines.push(message);
    }

    if (statusCode) {
        lines.push(`Status code: ${statusCode.toString()}`);
    }

    if (body) {
        lines.push(`Body: ${JSON.stringify(body, undefined, 2)}`);
    }

    if (cause) {
        lines.push(`Inner: ${cause}`);
    }

    return lines.join("\n");
}
