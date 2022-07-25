const { s } = require('@sapphire/shapeshift');

/**
 * @param {string} name - The name of the command. @required
 * @param {string} aliases - Optional aliases of the command.
 * @param {string} description - The brief description of the command. @required
 * @param {string} detailedDescription - The detailed description of the command.
 * @param {boolean} owner - Wether the command can be executed by the bot owner only or not.
 * @param {boolean} admin - Wether the command can be executed by the guild admins only or not.
 * @param {string} channel - Whether the command can only be executed in a DM, a Guild, or both.
 * @param {string} separator - A string used to separate arguments.
 */
class MessageCommand {
    constructor(id, options = {}) {

        s.object({
            name: s.string,
            aliases: s.array(s.string).optional,
            description: s.string,
            info: s.string.optional,
            owner: s.boolean.optional,
            admin: s.boolean.optional,
            channel: s.string.optional,
            separator: s.string.optional,
            category: s.string.optional,
            cooldown: s.number.optional,
            ignoreOwner: s.boolean.optional,
            inVoice: s.boolean.optional
        }).parse(options);

        this.id = id;

        this.aliases = [...(options.aliases ? options.aliases : []), options.name];

        this.type = options.type;

        this.description = options.description;

        this.owner = options.owner;

        this.admin = options.admin;

        this.channel = options.channel;

        this.separator = options.separator;

        this.args = options.args;

        this.category = options.category;

        this.config = options.config;

        this.cooldown = options.cooldown;

        this.ignoreOwner = options.ignoreOwner || false;

        this.inVoice = options.inVoice || false;

        this.info = options.info;
    }

    exec(message) {
        /*
         * Make your custom command here.
         */
    }
}

module.exports = { MessageCommand };