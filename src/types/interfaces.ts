import { APIApplicationCommandOptionChoice, ChannelType, Collection, SlashCommandBuilder } from 'discord.js';
import CommandHandler from '../handlers/CommandHandler.js';
import EventHandler from '../handlers/EventHandler.js';
import InhibitorHandler from '../handlers/InhibitorHandler.js';
import WebhookHandler from '../handlers/WebhookHandler.js';
import { ContextCommandBuilder, MessageCommandBuilder } from '../main.js';
import { Locales, MessageCommandArgumentType, PermissionNames, SlashCommandArgumentType } from './types.js';

export interface XernerxOptions {
    ownerId: string;
    permissions: {
        client: Array<string>;
        user: Array<string>;
        dm: boolean;
    };
    ignore: {
        owner: boolean;
        users: Array<string>;
        channels: Array<string>;
        guilds: Array<string>;
    };
    log: {
        ready: boolean;
        error: boolean;
    };
    cooldown: {
        command: number;
        cache: number;
    };
}

export interface ModuleOptions {
    options: {
        message?: MessageHandlerOptions;
        slash?: SlashHandlerOptions;
        context?: ContextHandlerOptions;
        events?: EventHandlerOptions;
    };
    commandHandler: CommandHandler;
    eventHandler: EventHandler;
    inhibitorHandler: InhibitorHandler;
    webhookHandler: WebhookHandler;
}

export interface XernerxCommands {
    message: Collection<string, MessageCommandBuilder>;
    slash: Collection<string, SlashCommandBuilder>;
    context: Collection<string, ContextCommandBuilder>;
}

export interface DBLOptions {
    topgg: {
        token: string;
    };
    dbl: {
        token: string;
    };
    config: {
        emits: boolean;
        logs: boolean;
    };
}

export interface XernerxCache {
    messages: Collection<string, string>;
}

interface CommandHandlerOptions {
    directory: string;
    cooldown?: number;
    permissions?: {
        user?: Array<string>;
        client?: Array<string>;
        dm?: boolean;
    };
    logging?: boolean;
}

export interface MessageHandlerOptions extends CommandHandlerOptions {
    prefix: string | Array<string>;
    allowMention?: boolean;
    handleEdits?: boolean;
    handleDeletes?: boolean;
    handleTyping?: boolean;
}
export interface SlashHandlerOptions extends CommandHandlerOptions {
    defer?: {
        reply?: boolean;
        ephemeral?: boolean;
        fetchReply?: boolean;
    };
}
export interface ContextHandlerOptions extends CommandHandlerOptions {
    defer?: {
        reply?: boolean;
        ephemeral?: boolean;
        fetchReply?: boolean;
    };
}

export interface EventHandlerOptions {
    directory: string;
}

interface CommandOptions {
    name: string;
    description?: string | null;
    info?: string | null;
    category?: string | null;
    cooldown?: number | null;
    ignore?: {
        owner?: boolean;
        users?: Array<string>;
        channels?: Array<string>;
        guilds?: Array<string>;
    };
    strict?: {
        owner?: boolean;
        users?: Array<string>;
        channels?: Array<string>;
        guilds?: Array<string>;
    };
    permissions?: {
        user?: Array<PermissionNames> | Array<string>;
        client?: Array<PermissionNames> | Array<string>;
        dm?: boolean;
    };
}

export interface MessageCommandOptions extends CommandOptions {
    aliases?: Array<string>;
    separator?: string;
    prefix?: Array<string> | string;
    regex?: RegExp;
    channelType?: Array<ChannelType>;
    args?: Array<MessageCommandArgumentOptions>;
    flags?: Array<MessageCommandFlagOptions>;
}

export interface MessageCommandArgumentOptions {
    type: MessageCommandArgumentType;
    name: string;
    content?: Array<string>;
    match?: string;
    description?: string;
    default?: string | Function;
    separator?: string | RegExp;
    prompt?: {
        reply?: string;
        send?: string;
    };
}

export interface MessageCommandFlagOptions {
    name: string;
    match: string;
}

export interface MessageCommandArguments {
    args: Record<string, unknown> | null;
    flags: Record<string, boolean> | null;
}

export interface SlashCommandOptions extends CommandOptions {
    description: string;
    nameLocalizations?: Record<Locales, string | null> | null;
    descriptionLocalizations?: Record<Locales, string | null> | null;
    defer?: {
        reply?: boolean;
        ephemeral?: boolean;
        fetchReply?: boolean;
    };
    args?: Array<SlashCommandArgumentOptions>;
    subcommands?: Array<SlashCommandSubcommandOptions>;
    groups?: Array<SlashCommandGroupOptions>;
}
export interface ContextCommandOptions extends CommandOptions {
    type: 'user' | 'message';
    nameLocalizations?: Record<Locales, string | null> | null;
    defer?: {
        reply?: boolean;
        ephemeral?: boolean;
        fetchReply?: boolean;
    };
}

export interface SlashCommandArgumentOptions {
    type: SlashCommandArgumentType;
    name: string;
    description: string;
    required?: boolean;
    autocomplete?: boolean;
    choices?: Array<{ name: string; value: string }>;
}

export interface SlashCommandSubcommandOptions {
    name: string;
    description: string;
    args: Array<SlashCommandArgumentOptions>;
}

export interface SlashCommandGroupOptions {
    name: string;
    description: string;
    subcommands: Array<SlashCommandSubcommandOptions>;
}

export interface SlashCommandArguments {
    args: Record<string, string>;
    subcommand: Record<string, string>;
    group: Record<string, string>;
}

export interface EventBuilderOptions {
    name: string;
    emitter: string;
    type: string;
    once: boolean;
}

export interface InhibitorBuilderOptions {
    name: string;
    type: string;
}
