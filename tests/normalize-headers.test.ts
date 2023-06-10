import { normalizeHeaders } from "./../src/wrapper/normalize-headers";

describe("normalizeHeaders", () => {
    it("should normalize header key with all lowercase", () => {
        const headers = {
            "content-type": "application/json"
        };

        const normalizedHeaders = normalizeHeaders(headers);

        expect(normalizedHeaders).toEqual({
            "Content-Type": "application/json"
        });
    });

    it("should normalize header key with all uppercase", () => {
        const headers = {
            "CONTENT-TYPE": "application/json"
        };

        const normalizedHeaders = normalizeHeaders(headers);

        expect(normalizedHeaders).toEqual({
            "Content-Type": "application/json"
        });
    });

    it("should normalize header key with mixed casing", () => {
        const headers = {
            "content-TYPE": "application/json"
        };

        const normalizedHeaders = normalizeHeaders(headers);

        expect(normalizedHeaders).toEqual({
            "Content-Type": "application/json"
        });
    });
});
