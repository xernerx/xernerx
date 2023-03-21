import { SlashCommandBuilder } from 'discord.js';
import InhibitorBuilder from '../build/InhibitorBuilder.js';
import XernerxClient, { ContextCommandBuilder, EventBuilder, MessageCommandBuilder } from '../main.js';
import { FileType } from '../types/types.js';

export default async function load(client: XernerxClient, path: string, type: FileType) {
    try {
        let file = new (await import(`file://${path}`)).default();

        file.fileType = type;

        file.filePath = path;

        file.client = client;

        fileSave(client, file, type);

        return file;
    } catch (error) {
        console.error(error);
    }
}

function fileSave(client: XernerxClient, file: MessageCommandBuilder | SlashCommandBuilder | ContextCommandBuilder | EventBuilder | InhibitorBuilder, type: FileType) {
    switch (type) {
        case 'MessageCommand':
            client.commands.message.set(file.name, file as MessageCommandBuilder);
            break;
        case 'SlashCommand':
            client.commands.slash.set(file.name, file as SlashCommandBuilder);
            break;
        case 'ContextCommand':
            client.commands.context.set(file.name, file as ContextCommandBuilder);
            break;
        case 'Inhibitor':
            client.inhibitors.set(file.name, file as InhibitorBuilder);
            break;
        case 'Event':
            client.events.set(file.name, file as EventBuilder);
            break;
    }
}
