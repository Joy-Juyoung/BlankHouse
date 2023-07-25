import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reviewsDataService from '../services/ReviewsService';

const initialState = [];

export const allReviews = createAsyncThunk('reviews/all', async () => {
  const res = await reviewsDataService.getAllReviews();
  return res.data;
});

export const allRoomReviews = createAsyncThunk('reviews/all/room', async () => {
  const res = await reviewsDataService.getAllRoomReviews();
  return res.data;
});

export const reviewById = createAsyncThunk(
  'reviews/getReviewById',
  async ({ id }) => {
    const res = await reviewsDataService.getReviewById(id);
    return res.data;
  }
);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [allReviews.fulfilled]: (state, action) => {
      return [action.payload];
    },
    [allRoomReviews.fulfilled]: (state, action) => {
      return [action.payload];
    },
    [reviewById.fulfilled]: (state, action) => {
      return [action.payload];
    },
  },
});

const { reducer } = reviewsSlice;
export default reducer;
