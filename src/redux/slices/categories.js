import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoriesDataService from '../services/CategoriesService';

const initialState = [];

export const allRoomCategories = createAsyncThunk(
  'categories/rooms',
  async () => {
    const res = await categoriesDataService.getAllRoomCategories();
    return res.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [allRoomCategories.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = categoriesSlice;
export default reducer;
