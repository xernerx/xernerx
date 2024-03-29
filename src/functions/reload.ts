/** @format */

import * as path from 'path';
import * as fs from 'fs';

import XernerxClient from '../client/XernerxClient.js';
import load from './load.js';

export default async function reload(client: XernerxClient, type: 'commands' | 'context' | 'message' | 'slash' | 'events' | 'inhibitors') {
	switch (type) {
		case 'message': {
			client.commands.message.clear();

			if (!client.modules.options.message) return null;

			const directory = path.resolve(client.modules.options.message?.directory);

			for (const file of fs.readdirSync(directory)) {
				load(client, `${directory}\\${file}`, 'MessageCommand');
			}

			return true;
		}

		case 'slash': {
			return client.commands.slash.clear();
		}

		case 'context': {
			return client.commands.context.clear();
		}

		case 'events': {
			return client.events.clear();
		}

		case 'inhibitors': {
			return client.inhibitors.clear();
		}
	}
}
