/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const RuleActionDto: core.serialization.Schema<serializers.RuleActionDto.Raw, Squidex.RuleActionDto> =
    core.serialization
        .union("actionType", {
            Algolia: core.serialization.lazyObject(async () => (await import("..")).AlgoliaRuleActionDto),
            AzureQueue: core.serialization.lazyObject(async () => (await import("..")).AzureQueueRuleActionDto),
            Comment: core.serialization.lazyObject(async () => (await import("..")).CommentRuleActionDto),
            CreateContent: core.serialization.lazyObject(async () => (await import("..")).CreateContentRuleActionDto),
            DeepDetect: core.serialization.lazyObject(async () => (await import("..")).DeepDetectRuleActionDto),
            Discourse: core.serialization.lazyObject(async () => (await import("..")).DiscourseRuleActionDto),
            ElasticSearch: core.serialization.lazyObject(async () => (await import("..")).ElasticSearchRuleActionDto),
            Email: core.serialization.lazyObject(async () => (await import("..")).EmailRuleActionDto),
            Fastly: core.serialization.lazyObject(async () => (await import("..")).FastlyRuleActionDto),
            Medium: core.serialization.lazyObject(async () => (await import("..")).MediumRuleActionDto),
            Notification: core.serialization.lazyObject(async () => (await import("..")).NotificationRuleActionDto),
            OpenSearch: core.serialization.lazyObject(async () => (await import("..")).OpenSearchRuleActionDto),
            Prerender: core.serialization.lazyObject(async () => (await import("..")).PrerenderRuleActionDto),
            Script: core.serialization.lazyObject(async () => (await import("..")).ScriptRuleActionDto),
            SignalR: core.serialization.lazyObject(async () => (await import("..")).SignalRRuleActionDto),
            Slack: core.serialization.lazyObject(async () => (await import("..")).SlackRuleActionDto),
            Tweet: core.serialization.lazyObject(async () => (await import("..")).TweetRuleActionDto),
            Typesense: core.serialization.lazyObject(async () => (await import("..")).TypesenseRuleActionDto),
            Webhook: core.serialization.lazyObject(async () => (await import("..")).WebhookRuleActionDto),
        })
        .transform<Squidex.RuleActionDto>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace RuleActionDto {
    type Raw =
        | RuleActionDto.Algolia
        | RuleActionDto.AzureQueue
        | RuleActionDto.Comment
        | RuleActionDto.CreateContent
        | RuleActionDto.DeepDetect
        | RuleActionDto.Discourse
        | RuleActionDto.ElasticSearch
        | RuleActionDto.Email
        | RuleActionDto.Fastly
        | RuleActionDto.Medium
        | RuleActionDto.Notification
        | RuleActionDto.OpenSearch
        | RuleActionDto.Prerender
        | RuleActionDto.Script
        | RuleActionDto.SignalR
        | RuleActionDto.Slack
        | RuleActionDto.Tweet
        | RuleActionDto.Typesense
        | RuleActionDto.Webhook;

    interface Algolia extends serializers.AlgoliaRuleActionDto.Raw {
        actionType: "Algolia";
    }

    interface AzureQueue extends serializers.AzureQueueRuleActionDto.Raw {
        actionType: "AzureQueue";
    }

    interface Comment extends serializers.CommentRuleActionDto.Raw {
        actionType: "Comment";
    }

    interface CreateContent extends serializers.CreateContentRuleActionDto.Raw {
        actionType: "CreateContent";
    }

    interface DeepDetect extends serializers.DeepDetectRuleActionDto.Raw {
        actionType: "DeepDetect";
    }

    interface Discourse extends serializers.DiscourseRuleActionDto.Raw {
        actionType: "Discourse";
    }

    interface ElasticSearch extends serializers.ElasticSearchRuleActionDto.Raw {
        actionType: "ElasticSearch";
    }

    interface Email extends serializers.EmailRuleActionDto.Raw {
        actionType: "Email";
    }

    interface Fastly extends serializers.FastlyRuleActionDto.Raw {
        actionType: "Fastly";
    }

    interface Medium extends serializers.MediumRuleActionDto.Raw {
        actionType: "Medium";
    }

    interface Notification extends serializers.NotificationRuleActionDto.Raw {
        actionType: "Notification";
    }

    interface OpenSearch extends serializers.OpenSearchRuleActionDto.Raw {
        actionType: "OpenSearch";
    }

    interface Prerender extends serializers.PrerenderRuleActionDto.Raw {
        actionType: "Prerender";
    }

    interface Script extends serializers.ScriptRuleActionDto.Raw {
        actionType: "Script";
    }

    interface SignalR extends serializers.SignalRRuleActionDto.Raw {
        actionType: "SignalR";
    }

    interface Slack extends serializers.SlackRuleActionDto.Raw {
        actionType: "Slack";
    }

    interface Tweet extends serializers.TweetRuleActionDto.Raw {
        actionType: "Tweet";
    }

    interface Typesense extends serializers.TypesenseRuleActionDto.Raw {
        actionType: "Typesense";
    }

    interface Webhook extends serializers.WebhookRuleActionDto.Raw {
        actionType: "Webhook";
    }
}
