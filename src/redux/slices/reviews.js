// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import reviewsDataService from '../services/ReviewsService';

// const initialState = [];

// const getAllReviews = () => {
//   return axios.get('/reviews');
// };

// const getAllRoomReviews = () => {
//   return axios.get('/reviews/rooms');
// };

// const getReviewById = (id) => {
//   return axios.get(`/reviews/${id}`);
// };

// const getReviewByRoom = (id) => {
//   return axios.get(`/reviews/rooms/${id}`);
// };

// export const allReviews = createAsyncThunk('reviews/all', async () => {
//   const res = await reviewsDataService.getAllReviews();
//   return res.data;
// });

// export const allRoomReviews = createAsyncThunk('reviews/all/room', async () => {
//   const res = await reviewsDataService.getAllRoomReviews();
//   return res.data;
// });

// export const reviewById = createAsyncThunk(
//   'reviews/getReviewById',
//   async ({ id }) => {
//     const res = await reviewsDataService.getReviewById(id);
//     return res.data;
//   }
// );

// export const reviewByRoom = createAsyncThunk(
//   'reviews/getReviewByRoom',
//   async ({ id }) => {
//     const res = await reviewsDataService.getReviewByRoom(id);
//     return res.data;
//   }
// );

// const reviewsSlice = createSlice({
//   name: 'reviews',
//   initialState,
//   extraReducers: {
//     [allReviews.fulfilled]: (state, action) => {
//       return [action.payload];
//     },
//     [allRoomReviews.fulfilled]: (state, action) => {
//       return [action.payload];
//     },
//     [reviewById.fulfilled]: (state, action) => {
//       return [action.payload];
//     },
//     [reviewByRoom.fulfilled]: (state, action) => {
//       return [action.payload];
//     },
//   },
// });

// const { reducer } = reviewsSlice;
// export default reducer;
