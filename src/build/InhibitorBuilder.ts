import { s } from '@sapphire/shapeshift';
import XernerxClient from '../client/XernerxClient.js';
import { InhibitorType } from '../main.js';
import { InhibitorOptions, MessageArgOptions, SlashArgOptions } from '../types/options.js';
import { XernerxInteraction, XernerxMessage } from '../types/types.js';

/**
 * @description - The inhibitor builder for inhibitors.
 * @param {String} id - The unique ID of the inhibitor.
 * @param {InhibitorOptions} options - The inhibitor options.
 */
export default class InhibitorBuilder {
	id: string;
	name: string;
	type: InhibitorType;
	client: XernerxClient | object;

	constructor(id: string, options: InhibitorOptions) {
		this.id = id;

		s.object({
			name: s.string,
			type: s.string,
		}).parse(options);

		this.name = options.name;

		this.type = options.type;

		this.client = XernerxClient;
	}

	/**
	 *
	 */
	public async check(interaction: XernerxInteraction | XernerxMessage, args: SlashArgOptions | MessageArgOptions) {}
}
