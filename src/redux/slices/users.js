import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersDataService from '../services/UsersService';

export const allUsers = createAsyncThunk('users/all', async () => {
  const res = await usersDataService.getAllUser();
  return res.data;
});

export const userMe = createAsyncThunk('users/me', async () => {
  const res = await usersDataService.getUser();
  return res.data;
});

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ username, password }, thunkAPI) => {
    const res = await usersDataService.loginUser({
      username,
      password,
    });
    return res.data;
  }
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async ({ username }, thunkAPI) => {
    const res = await usersDataService.logoutUser({
      username,
    });
    return res.data;
  }
);

export const register = createAsyncThunk(
  'users/register',
  async ({ username, email, password }, thunkAPI) => {
    // try {
    const res = await usersDataService.registerUser({
      username,
      email,
      password,
    });
    return res.data;
  }
);

export const updateUserInfo = createAsyncThunk(
  'reviews/getReviewById',
  async ({ email }) => {
    const res = await usersDataService.updateUser({
      email,
    });
    return res.data;
  }
);

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [allUsers.fulfilled]: (state, action) => {
      return [action.payload];
    },
    [register.fulfilled]: (state, action) => {
      return action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      return action.payload;
    },
    [logoutUser.fulfilled]: (state, action) => {
      return action.payload;
    },
    [userMe.fulfilled]: (state, action) => {
      return [action.payload];
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer } = usersSlice;
export default reducer;

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   extraReducers: {
//     [allUsers.fulfilled]: (state, action) => {
//       return [...action.payload];
//     },
//     [register.fulfilled]: (state, action) => {
//       return [...action.payload];
//     },
//     [login.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [login.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.userInfo = payload;
//     },
//     [login.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },
//     [logout.fulfilled]: (state, action) => {
//       return [...action.payload];
//     },
//     [userMe.fulfilled]: (state, action) => {
//       return [action.payload];
//     },
//   },
// });
