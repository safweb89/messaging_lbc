import {IConversation} from './Conversation';

export interface IChat {
    selectedConversation: string;
    conversation?: IConversation;
}