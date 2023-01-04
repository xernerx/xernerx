export default {
	"XernerxClient": {
		"description": "Client extender for building the client.",
		"example": "const {XernerxClient} = require('xernerx');\n\nnew XernerxClient({/* options */});",
		"properties": [],
		"params": [
			{
				"parameter": "guildId",
				"type": "string",
				"default": "undefined",
				"description": "The guild ID used to globally load commands."
			},
			{
				"parameter": "global",
				"type": "boolean",
				"default": "false",
				"description": "Whether to load commands globally or locally."
			},
			{
				"parameter": "prefix",
				"type": "string[]",
				"default": "[]",
				"description": "An array of prefixes used for message commands."
			},
			{
				"parameter": "mentionPrefix",
				"type": "boolean",
				"default": "false",
				"description": "Whether the bot should listen to messages containing a client mention."
			},
			{
				"parameter": "ownerId",
				"type": "string[]",
				"default": "[]",
				"description": "An array of user IDs that are considered owner."
			},
			{
				"parameter": "ignoreOwner",
				"type": "boolean",
				"default": "false",
				"description": "Whether the bot should ignore owner privileges."
			},
			{
				"parameter": "defaultCooldown",
				"type": "number",
				"default": "0",
				"description": "A number of milliseconds each command cooldown should be."
			},
			{
				"parameter": "cacheTime",
				"type": "number",
				"default": "300000",
				"description": "A number of seconds for message cache to be deleted."
			},
			{
				"parameter": "userPermissions",
				"type": "string[]",
				"default": "[]",
				"description": "An array of permissions the user needs to use the commands."
			},
			{
				"parameter": "clientPermissions",
				"type": "string[]",
				"default": "[]",
				"description": "An array of permissions the client needs to use the commands."
			},
			{
				"parameter": "logging",
				"type": "boolean || string[]",
				"default": "false",
				"description": "True or array with names for logging in the console on login."
			}
		]
	}
}