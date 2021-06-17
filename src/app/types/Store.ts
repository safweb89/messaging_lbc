import {IUser} from './User';
import {IConversation} from './Conversation';
import { IChat } from './Chat';

export interface IStore {
    users: Array<IUser>;
    conversation: Array<IConversation>,
    chat: IChat
}