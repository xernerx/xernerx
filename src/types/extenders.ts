import {
    ChatInputCommandInteraction,
    DMChannel,
    Guild,
    GuildChannel,
    GuildMember,
    InteractionResponse,
    Message,
    MessageContextMenuCommandInteraction,
    User,
    UserContextMenuCommandInteraction,
} from 'discord.js';
import InteractionUtil from '../utils/InteractionUtil.js';
import MessageUtil from '../utils/MessageUtil.js';

export interface XernerxUser extends User {
    owner: boolean;
    voted: boolean | null;
}

export interface XernerxMember extends GuildMember {
    username: string;
}

export interface XernerxGuild extends Guild {}

export interface XernerxGuildChannel extends GuildChannel {}

export interface XernerxDMChannel extends DMChannel {}

interface XernerxCommand {
    util: InteractionUtil | MessageUtil;
}

export interface XernerxMessage extends Message, XernerxCommand {
    user: XernerxUser;
}

export interface XernerxSlashInteraction extends ChatInputCommandInteraction, XernerxCommand {}

export interface XernerxUserContextInteraction extends UserContextMenuCommandInteraction, XernerxCommand {}

export interface XernerxMessageContextInteraction extends MessageContextMenuCommandInteraction, XernerxCommand {}