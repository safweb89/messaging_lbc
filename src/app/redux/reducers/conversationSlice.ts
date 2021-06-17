import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/redux/store';
import { IConversation } from 'app/types';
import {initialStateMock} from './initialState';

const initialState: Array<IConversation> = initialStateMock.conversation;

export const conversationSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {},
});

export const selectConversationMembers = (state: RootState, id: string) => state.conversation.find(item => item.id === id)?.members;
export const selectConversation = (state: RootState) => state.conversation;

export default conversationSlice.reducer;
