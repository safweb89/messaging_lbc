import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/redux/store';
import { IUser } from 'app/types';
import {initialStateMock} from './initialState';


const initialState: Array<IUser> = initialStateMock.users;

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
});

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
