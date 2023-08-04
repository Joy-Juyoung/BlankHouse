import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {};

export const getAllRoomCategoryAsync = createAsyncThunk(
  'category/getAllRoomCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/categories/rooms');
      thunkAPI.dispatch(setCategory(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRoomCategoryAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllRoomCategoryAsync.fulfilled, (state, action) => {
        state.category = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getAllRoomCategoryAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setCategory } = categorySlice.actions;

export const selectCategory = (state) => state.category.category;
export const selectStatus = (state) => state.category.status;
export const selectError = (state) => state.category.error;

export default categorySlice.reducer;
