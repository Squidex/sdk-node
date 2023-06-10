import { BadRequestError } from "../src/api";

describe("Errors", () => {
    it("Should contain details", () => {
        const details = "My details in the error object";
        const message = 'My Message'

        const error = new BadRequestError({
            message,
            statusCode: 400,
            details: [
                details
            ]
        });

        expect(error.message).toContain(details);
        expect(error.message).toContain(message);
    });
});