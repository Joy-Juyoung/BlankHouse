import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Check if there is user data in localStorage during initial store setup
const userData = localStorage.getItem('user');
// const initialState = {
//   user: userData ? JSON.parse(userData) : null,
//   status: 'loading', // or 'loading', 'succeeded', 'failed'
//   error: null,
// };
let initialState;

try {
  initialState = {
    user: userData ? JSON.parse(userData) : null,
    status: userData ? 'succeeded' : 'loading',
    error: null,
  };
} catch (error) {
  // Handle the parsing error
  console.error('Error parsing user data from localStorage:', error);
  initialState = {
    user: null,
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
      toast.success('Logged in successfully!', {
        position: toast.POSITION.TOP_CENTER,
        closeButton: true,
        // timeOut: 10,
        autoClose: 1000,
        progressBar: true,
        allowHtml: true,
      });
      thunkAPI.dispatch(setUser(response.data.user)); // Dispatch the setUser action to update Redux store
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Save user data to localStorage
      return response.data.user;
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
      return response.data.user;
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
      thunkAPI.dispatch(setUser(response.data.user)); // Dispatch the setUser action to update Redux store
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Save user data to localStorage
      return response.data.user;
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    // logout(state) {
    //   state.user = null;
    //   state.status = 'succeeded';
    //   state.error = null;
    //   localStorage.removeItem('user'); // Remove user data from localStorage on logout
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.user = null;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(signupAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getUserInfoAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getUserInfoAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setUser, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
