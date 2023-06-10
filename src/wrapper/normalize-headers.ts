export function normalizeHeaders(headers: Record<string, string>): Record<string, string> {
    const normalized: Record<string, string> = {};
  
    for (const [key, value] of Object.entries(headers)) {
        let normalizedKey = '', previousChar: string | null = null;

        for (let i = 0; i < key.length; i++) {
            const c = key.charAt(i);

            if (previousChar === null || previousChar === '-') {
                normalizedKey += c.toUpperCase();
            } else {
                normalizedKey += c.toLowerCase();
            }

            previousChar = c;
        }

        normalized[normalizedKey] = value
    }
  
    return normalized;
}