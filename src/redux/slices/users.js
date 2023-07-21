import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersDataService from '../services/UsersService';

const initialState = [];

export const allUsers = createAsyncThunk('users/all', async () => {
  const res = await usersDataService.getAllUser();
  return res.data;
});

export const userMe = createAsyncThunk('users/me', async () => {
  const res = await usersDataService.getUser();
  return res.data;
});

export const registerUser = createAsyncThunk(
  'users/register',
  async ({ username, email, password }) => {
    const res = await usersDataService.registerUser({
      username,
      email,
      password,
    });
    return res.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [allUsers.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [userMe.fulfilled]: (state, action) => {
      return [action.payload];
    },
  },
});

const { reducer } = usersSlice;
export default reducer;
