import { SquidexBadRequestError, SquidexError } from "../src";
import { getEnvironment, getClient, delay } from "./_utils";

async function setup() {
    console.log("SETUP");

    const { client } = getClient();

    console.log(`Using <appName>=<${client.appName}>`);
    console.log(`Using <clientId>=<${client.clientId}>`);
    console.log(`Using <clientSecret>=<${client.clientSecret}>`);
    console.log(`Using <environment>=<${client.environment}>`);

    const waitForServer = async () => {
        const waitTime = parseInt(getEnvironment("CONFIG__WAIT", "0"), 10);

        if (waitTime <= 0) {
            console.log("Waiting for server is skipped.");
            return;
        }
    
        console.log(`Waiting ${waitTime} seconds to access server.`);
    
        const timeout = waitTime * 1000;
        const timeStart = getTime();
    
        while (true) {
            try {
                await client.ping.getPing();
                break;
            } catch (error) {
                if (error instanceof SquidexError) {
                    throw error;
                }
    
                const elapsed = getTime() - timeStart;
    
                if (elapsed > timeout) {
                    throw new Error(`Cannot connect to test system with: ${error}.`);
                }
            }
    
            await delay(100);
        }
    
        console.log("Connected to server.");
    }

    await waitForServer();    

    try {
        await client.apps.postApp({ createAppDto: { name: client.appName } });
    } catch (ex) {
        if (!(ex instanceof SquidexBadRequestError)) {
            throw ex;
        }
    }
}

export default setup;

function getTime() {
    return new Date().getTime();
}
