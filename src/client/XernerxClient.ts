import { Client, Collection } from 'discord.js';
import { s } from '@sapphire/shapeshift';
import ExtensionBuilder from 'xernerx-extension-builder';
import { Style } from 'dumfunctions';

import { ClientUtil } from '../utils/ClientUtil.js';
import { ClientOptions, DiscordOptions, ExtensionOptions, HandlerOptions } from '../types/options.js';
import { ClientCache, ClientCommands, ClientModules } from '../types/interfaces.js';

import CommandHandler from '../handlers/CommandHandler.js';
import EventHandler from '../handlers/EventHandler.js';
import InhibitorHandler from '../handlers/InhibitorHandler.js';
import Extensions from '../models/Extensions.js';
import EventBuilder from '../build/EventBuilder.js';
import InhibitorBuilder from '../build/InhibitorBuilder.js';

// TODO - Add logOnError as a setting to the client.
// TODO - Add commandNotFound as an event to the client.

/**
 * @description - The Client.
 * @param {DiscordOptions} discordOptions - The options for discord.js.
 * @param {ClientOptions} clientOptions - The options for the Xernerx Client.
 * @extends {Client}
 */
export default class XernerxClient extends Client {
	public settings: ClientOptions;
	public commands: ClientCommands;
	public cache: ClientCache;
	public modules: ClientModules;
	public util: ClientUtil;
	public handlerOptions: HandlerOptions;
	public events: Collection<string, EventBuilder>;
	public extensions: Record<string, ExtensionBuilder>;
	public inhibitors: Collection<string, InhibitorBuilder>;
	public config: object;

	constructor(discordOptions: DiscordOptions, clientOptions: ClientOptions, config?: object) {
		super(discordOptions);

		this.settings = s
			.object({
				ownerId: s.union(s.array(s.string).unique, s.string).default([]),
				clientPermissions: s.array(s.bigint).default([]),
				userPermissions: s.array(s.bigint).default([]),
				ignoreOwner: s.boolean.default(false),
				logging: s.boolean.optional,
				cooldown: s.object({
					default: s.number.default(0),
					cache: s.number.default(0),
				}).optional,
			})
			.parse(clientOptions);

		this.config = config || {};

		this.commands = {
			message: new Collection(),
			slash: new Collection(),
			context: new Collection(),
		};

		this.events = new Collection();

		this.inhibitors = new Collection();

		this.cache = {
			messages: new Collection(),
			cooldowns: new Collection(),
			messageCommands: new Collection(),
			slashCommands: new Collection(),
			contextCommands: new Collection(),
			commands: new Collection(),
		};

		this.modules = {
			commandHandler: new CommandHandler(this),
			eventHandler: new EventHandler(this),
			inhibitorHandler: new InhibitorHandler(this),
		};

		this.extensions = {};

		this.util = new ClientUtil(this);

		this.handlerOptions = {};

		if (this.settings.logging) {
			this.once('ready', async (client) => {
				const size = (await client.guilds.fetch()).size;

				console.info(
					Style.log(
						`Xernerx | ${client.user.tag} signed in watching ${size} server${size > 1 ? 's' : ''}. ${
							(this.handlerOptions.slash || this.handlerOptions.context)?.guildId
								? `Using ${
										(
											await this.guilds.fetch(
												(this.handlerOptions.slash || this.handlerOptions.context)?.guildId || '0'
											)
										).name
								  } as local guild.`
								: ''
						}`,
						{ color: Style.TextColor.Purple }
					)
				);
			});
		}
	}

	public register(token: string) {
		this.login(token);
	}

	public loadAllExtensions(options: ExtensionOptions) {
		const extensions = new Extensions(this);

		return extensions.load(options.extensions, options.logging || false);
	}
}
