import { Token } from "./Token";

export interface TokenStore {
    get(): Token | undefined;

    set(token: Token): void;

    clear(): void;
}

export class InMemoryTokenStore implements TokenStore {
    private token: Token | undefined;

    get(): Token | undefined {
        return this.token;
    }

    set(token: Token): void {
        this.token = token;
    }

    clear() {
        this.token = undefined;
    }
}

export class StorageTokenStore implements TokenStore {
    constructor(
        readonly store: Storage = localStorage,
        readonly key = "SquidexToken",
    ) {}

    get(): Token | undefined {
        const value = this.store.getItem(this.key);

        if (!value) {
            return undefined;
        }

        return JSON.parse(value);
    }

    set(token: Token): void {
        this.store.setItem(this.key, JSON.stringify(token));
    }

    clear() {
        this.store.removeItem(this.key);
    }
}
