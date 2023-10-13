import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Female } from '@mui/icons-material';

// Check if there is user data in localStorage during initial store setup
const userData = localStorage.getItem('user');
let initialState;

try {
  initialState = {
    // user: userData ? JSON.parse(userData) : null,
    loginUser: {},
    logoutUser: {},
    signupUser: {},
    getMeUser: {},
    status: userData ? 'succeeded' : 'loading',
    error: null,
  };
} catch (error) {
  // Handle the parsing error
  console.error('Error parsing user data from localStorage:', error);
  initialState = {
    // user: null,
    loginUser: null,
    logoutUser: null,
    signupUser: null,
    getMeUser: null,
    status: 'loading',
    error: null,
  };
}

export const loginAsync = createAsyncThunk(
  'user/login',
  async ({ username, password }, thunkAPI) => {
    // if (!username || !password) {
    //   return thunkAPI.rejectWithValue('Username and password are required.');
    // }

    try {
      const response = await axios.post('/users/log-in', {
        username,
        password,
      });

      thunkAPI.dispatch(setUser(response.data)); // Dispatch the setUser action to update Redux store
      // localStorage.setItem('user', JSON.stringify(response.data)); // Save user data to localStorage
      // const ok = response.data.ok;

      return response.data;
      // return ok;
    } catch (error) {
      toast.error('Login failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  'user/logout',
  async ({ username }, thunkAPI) => {
    // if (!username || !password) {
    //   return thunkAPI.rejectWithValue('Username and password are required.');
    // }

    try {
      const response = await axios.post('/users/log-out', {
        username,
      });
      toast.success('Logged out successfully!', {
        position: toast.POSITION.TOP_CENTER,
        closeButton: true,
        // timeOut: 10,
        autoClose: 1000,
        progressBar: true,
        allowHtml: true,
      });
      thunkAPI.dispatch(setUser()); // Dispatch the setUser action to update Redux store
      localStorage.removeItem('user');
      return response.data;
    } catch (error) {
      toast.error('Logout failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signupAsync = createAsyncThunk(
  'user/signup',
  async ({ username, password }, thunkAPI) => {
    // if (!username || !password) {
    //   return thunkAPI.rejectWithValue('Username and password are required.');
    // }

    try {
      const response = await axios.post('/users', {
        username,
        password,
      });
      toast.success('Signup in successfully!', {
        position: toast.POSITION.TOP_CENTER,
        closeButton: true,
        // timeOut: 10,
        autoClose: 1000,
        progressBar: true,
        allowHtml: true,
      });
      thunkAPI.dispatch(setUser(response.data));
      // localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserInfoAsync = createAsyncThunk(
  'user/getUserInfo',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users/me');
      thunkAPI.dispatch(setUser(response.data)); // Dispatch the setUser action to update Redux store
      localStorage.setItem('user', JSON.stringify(response.data)); // Save user data to localStorage
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserAsync = createAsyncThunk(
  'user/editProfile',
  async (
    {
      // username,
      // email,
      // balance,
      // address,
      // emergency_contact,
      // phone_number,
      // gender,
      // language,
      // currency,
      saveUsername,
      saveEmail,
      savePhone,
      saveAddress,
      saveEmergency,
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.put('/users/me', {
        // username,
        // email,
        // balance,
        // address,
        // emergency_contact,
        // phone_number,
        // gender,
        // language,
        // currency,
        username: saveUsername,
        email: saveEmail,
        phone_number: savePhone,
        address: saveAddress,
        emergency_contact: saveEmergency,
      });
      // toast.success('Edit profile successfully!', {
      //   position: toast.POSITION.TOP_CENTER,
      //   closeButton: true,
      //   autoClose: 1000,
      //   progressBar: true,
      //   allowHtml: true,
      // });
      thunkAPI.dispatch(setUser(response.data));
      // localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      // state.loginUser = action.payload;
      state.getMeUser = action.payload;
      state.status = 'succeeded';
      state.error = null;
      // localStorage.setItem('user', JSON.stringify(state.getMeUser.data));
    },
  },
  extraReducers: {
    [loginAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [loginAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, loginUser: payload };
    },
    [loginAsync.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [logoutAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [logoutAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, logoutUser: payload };
    },
    [logoutAsync.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [signupAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [signupAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, signupUser: payload };
    },
    [signupAsync.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [getUserInfoAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getUserInfoAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      // state.status = 'Pending';
      // state.error = payload.error;
      return { ...state, getMeUser: payload };
    },
    [getUserInfoAsync.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [editUserAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [editUserAsync.fulfilled]: (state, { payload }) => {
      console.log('Edit Successfully!');
      return { ...state, editMeUser: payload };
    },
    [editUserAsync.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const loginUser = (state) => state.user.loginUser;
export const logoutUser = (state) => state.user.logoutUser;
export const signupUser = (state) => state.user.signupUser;
export const getMeUser = (state) => state.user.getMeUser;
export const editMeUser = (state) => state.user.editMeUser;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
