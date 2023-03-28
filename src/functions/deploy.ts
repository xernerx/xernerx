import XernerxClient, { ContextCommandBuilder, GatewayVersion, REST, Routes, SlashCommandBuilder } from '../main.js';
import XernerxLog from '../tools/XernerxLog.js';

const commands = { slash: [], context: [], retries: 0 };

export default function deploy(client: XernerxClient, type: 'slash' | 'context') {
    client.prependOnceListener('ready', (client) => {
        commands[type] = client.commands[type].map((command: SlashCommandBuilder | ContextCommandBuilder) => command.data.toJSON());

        if (commands.retries % 2) {
            try {
                if (client.settings.global) {
                    put(client, client.settings.global, [...commands.slash, ...commands.context]);
                    put(client, !client.settings.global, []);
                } else {
                    put(client, !client.settings.global, [...commands.slash, ...commands.context]);
                    put(client, client.settings.global, []);
                }
            } catch (error) {
                new XernerxLog(client).error(`An error occurred while deploying the interaction commands`, error);
            }
        }

        commands.retries++;
    });
}

function put(client: XernerxClient, global: boolean, body: Array<object>) {
    const rest = new REST({ version: GatewayVersion }).setToken(client.token as string);

    if (!global) rest.put(Routes.applicationGuildCommands(client.user?.id as string, client.settings.local), { body });
    else rest.put(Routes.applicationCommands(client.user?.id as string), { body });
}
