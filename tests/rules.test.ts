import { WebhookRuleActionDto } from "../src";
import { getClient } from "./_utils";

const { client } = getClient();

describe("Rules", () => {
    it("should create and fetch rule", async () => {
        const createdRule = await client.rules.postRule({
            action: {
                actionType: "Webhook",
                method: "POST",
                payload: "payload",
                payloadType: "text/plain",
                url: "https://squidex.io",
            } as WebhookRuleActionDto,
            trigger: {
                triggerType: "Manual",
            },
        });

        const rules = await client.rules.getRules({});
        const rule = rules.items.find((x) => x.id === createdRule.id);
        expect(rule?.name).toEqual(createdRule.name);
        expect(rule?.action).toBeDefined();
        expect(rule?.action.actionType).toEqual("Webhook");
        expect(rule?.trigger).toBeDefined();
        expect(rule?.trigger.triggerType).toEqual("Manual");
    });
});
