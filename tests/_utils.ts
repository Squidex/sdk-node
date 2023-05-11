import axios from "axios";
import https from "https"
import { SquidexError } from "../src/errors/SquidexError";
import { SquidexClient } from "../src/wrapper/SquidexClient";

let singleClient: Promise<{ client: SquidexClient, create: (app: string) => SquidexClient }>;

export function guid(): string {
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

export function getClient() {
    singleClient ||= (async function () {          
        axios.defaults.httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        const appName = getAndPrintValue("CONFIG__APP__NAME", "integrations-tests");
        const clientId = getAndPrintValue("CONFIG__CLIENT__ID", "root");
        const clientSecret = getAndPrintValue("CONFIG__CLIENT__SECRET", "xeLd6jFxqbXJrfmNLlO2j1apagGGGSyZJhFnIuHp4I0=");
        const environment = getAndPrintValue("CONFIG__SERVER__URL", "https://localhost:5001");
        const waitTime = parseInt(getAndPrintValue("CONFIG__WAIT", "0"), 10);

        const client = new SquidexClient({
            appName,
            clientId,
            clientSecret,
            environment
        });

        if (waitTime > 10) {
            console.log(`Waiting ${waitTime} seconds to access server.`);

            const timeout = waitTime * waitTime;
            const timeStart = getTime();

            while (true) {
                try {
                    await client.ping.getPing();
                    break;
                } catch (error) {
                    if (error instanceof SquidexError) {
                        throw error;
                    }

                    if ((getTime() - timeStart) > timeout) {
                        throw new Error(`Cannot connect to test system ${environment} with: ${error}.`);
                    }
                }

                await delay(100);
            }

            console.log("Connected to server.");
        } else {
            console.log("Waiting for server is skipped.");
        }

        try {
            await client.apps.postApp({ name: appName });
        } catch {
        }

        const create = (app: string) => {
            return new SquidexClient({
                appName: app,
                clientId,
                clientSecret,
                environment
            });
        }

        return { client, create };
    })();

    return singleClient;
}

function getAndPrintValue(key: string, fallback: string) {
    let value = process.env[key];

    if (!value || value.length === 0 || value.trim().length === 0) {
        value = fallback;
    }

    console.log(`Using <${key}>=<${value}>`);
    return value;
}

function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function getTime() {
    return new Date().getTime();
}