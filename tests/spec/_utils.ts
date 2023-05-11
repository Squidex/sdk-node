import { SquidexClient } from './../../dist';

let CLIENTS: { [name: string]: SquidexClient } = {};

export function clientWithDefaultApp() {
    return clientWithApp('integration-tests');
}

export async function clientWithApp(app: string) {
    let client = CLIENTS[app];

    if (client) {
        client = new SquidexClient({
            app: 'root',
            clientId: process.env.CLIENT_ID || 'root',
            clientSecret: process.env.CLIENT_SECRET || 'xeLd6jFxqbXJrfmNLlO2j1apagGGGSyZJhFnIuHp4I0=',
            environment: process.env.ENVIRONMENT || 'https://localhost:5001'
        });

        try {
            await client.apps.create({
                name: app
            });
        } catch {
            // TODO: Error handling.
        }

        CLIENTS[app] = client;
    }

    return client;
}

export function guid(): string {
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}