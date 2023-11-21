import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const initialState = {};

export const getAllRoomCategoryAsync = createAsyncThunk(
  'category/getAllRoomCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/categories/rooms');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllExCategoryAsync = createAsyncThunk(
  'category/getAllExCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/categories/experience');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  allCategories: [],
  status: 'idle',
  error: null,
  selectCategory: {},
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    removeSelectedCategory: (state) => {
      state.selectCategory = {};
    },
  },
  extraReducers: {
    [getAllRoomCategoryAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getAllRoomCategoryAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, allRoomCategory: payload };
    },
    [getAllRoomCategoryAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },

    [getAllExCategoryAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getAllExCategoryAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, allExCategory: payload };
    },
    [getAllExCategoryAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export const getAllCategory = (state) => state.category.allRoomCategory;
export const getAllExCategory = (state) => state.category.allExCategory;
export const selectStatus = (state) => state.category.status;
export const selectError = (state) => state.category.error;

export default categorySlice.reducer;
