import { SquidexClient } from "../src";
import { Agent, setGlobalDispatcher } from "undici";

let singleClient: { client: SquidexClient; create: (app: string) => SquidexClient };

export function getClient() {
    if (singleClient) {
        return singleClient;
    }

    const appName = getEnvironment("CONFIG__APP__NAME", "integrations-tests");
    const clientId = getEnvironment("CONFIG__CLIENT__ID", "root");
    const clientSecret = getEnvironment("CONFIG__CLIENT__SECRET", "xeLd6jFxqbXJrfmNLlO2j1apagGGGSyZJhFnIuHp4I0=");
    const environment = getEnvironment("CONFIG__SERVER__URL", "http://localhost:8080");

    const httpsAgent = new Agent({
        connect: {
            rejectUnauthorized: false,
        },
    });

    setGlobalDispatcher(httpsAgent);

    const client = new SquidexClient({
        appName,
        clientId,
        clientSecret,
        environment,
    });

    const create = (app: string) => {
        return new SquidexClient({
            appName: app,
            clientId,
            clientSecret,
            environment,
        });
    };

    singleClient = { client, create };

    return singleClient;
}

export function getEnvironment(key: string, fallback: string) {
    let value = process.env[key];

    if (!value || value.length === 0 || value.trim().length === 0) {
        value = fallback;
    }

    return value;
}

export function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export function guid(): string {
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
