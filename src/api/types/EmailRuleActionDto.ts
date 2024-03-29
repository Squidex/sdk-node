/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface EmailRuleActionDto {
    /** The IP address or host to the SMTP server. <span style="white-space: nowrap">`non-empty`</span> */
    serverHost: string;
    /** The port to the SMTP server. */
    serverPort: number;
    /** The username for the SMTP server. <span style="white-space: nowrap">`non-empty`</span> */
    serverUsername: string;
    /** The password for the SMTP server. <span style="white-space: nowrap">`non-empty`</span> */
    serverPassword: string;
    /** The email sending address. <span style="white-space: nowrap">`non-empty`</span> */
    messageFrom: string;
    /** The email message will be sent to. <span style="white-space: nowrap">`non-empty`</span> */
    messageTo: string;
    /** The subject line for this email message. <span style="white-space: nowrap">`non-empty`</span> */
    messageSubject: string;
    /** The message body. <span style="white-space: nowrap">`non-empty`</span> */
    messageBody: string;
}
