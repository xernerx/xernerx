"use strict"

import { XernerxClient } from "../main.js";
import { AutoPoster } from 'topgg-autoposter';
import SDK, { WebhookPayload } from '@top-gg/sdk';
import express from 'express';

interface WebhookOptions {
    token: string,
    logging: boolean
}

export default class WebhookHandler {
    client: XernerxClient;

    constructor(client: XernerxClient) {
        this.client = client;

        this.vote = this.vote;

        this.post = this.post;
    }

    post(options: WebhookOptions) {
        const auto = AutoPoster(options.token, this.client)

        auto
            .on('posted', post => {
                if (options.logging) console.info(`Xernerx | Successfully posted bot stats to Top.gg!`)
                return this.client.emit('webhookPost', post)
            })
            .on('error', error => {
                if (options.logging) console.info(`Xernerx | An error occurred while posting stats to Top.gg, ${error}.`)
                return this.client.emit('webhookError', error)
            })

        return auto;
    }

    vote(options: WebhookOptions) {
        const app = express();

        const webhook = new SDK.Webhook(options.token);

        // app.post("/dblwebhook", webhook.listener(vote => {
        //     try {
        //         return this.client.emit("webhookVote", (vote as WebhookPayload))
        //     }
        //     catch (error) {
        //         return this.client.emit("webhookError", error)
        //     }
        // }))

        app.listen(4444)
    }
}