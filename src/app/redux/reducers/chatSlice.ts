import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/redux/store';
import { IConversation,IMessage } from 'app/types';
import { IChat } from 'app/types/Chat';
import {initialStateMock} from './initialState';




const initialState: IChat = initialStateMock.chat;

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        sendMessage: (state, action:PayloadAction<IMessage>) => {
            state.conversation?.messages.push(action.payload);
        },
        setSelectedConversation: (state, action: PayloadAction<{id:string, conversation:IConversation | undefined}>) =>{
            state.selectedConversation = action.payload.id;
            state.conversation = action.payload.conversation;
        },
    },
});

export const { sendMessage, setSelectedConversation, } = chatSlice.actions;

//Selectors
export const selectChat = (state: RootState) => state.chat?.conversation;
export const selectSelectedConversation = (state: RootState) => state.chat?.selectedConversation;

export default chatSlice.reducer;
