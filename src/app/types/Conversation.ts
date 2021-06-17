import {IUser} from './User';


export interface IMessage {
    from: IUser| undefined;
    to:  Array<IUser>;
    text: string;
    time: string;
}


export interface IConversation {
    id: string;
    members: Array<IUser>;
    me: IUser;
    messages: Array<IMessage>;
}