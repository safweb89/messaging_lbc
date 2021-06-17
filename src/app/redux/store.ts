import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chatReducer from './reducers/chatSlice';
import conversationReducer from './reducers/conversationSlice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    conversation: conversationReducer,
    chat: chatReducer
  },
});

export function createTestStore() {
  const storeTest = configureStore({
    reducer: {
      users: userReducer,
      conversation: conversationReducer,
      chat: chatReducer
    },
  });
  return storeTest;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
