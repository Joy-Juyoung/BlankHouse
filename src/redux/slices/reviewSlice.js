import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = { review: {}, status: 'idle', error: null };

export const getAllRewviewAsync = createAsyncThunk(
  'review/getAllReview',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews');
      thunkAPI.dispatch(setReview(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllRoomReviewsAsync = createAsyncThunk(
  'review/getAllRoomReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews');
      thunkAPI.dispatch(setReview(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getReviewByIdAsync = createAsyncThunk(
  'review/getReviewById',
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/reviews/${id}`);
      thunkAPI.dispatch(setReview(response.data.review)); // Dispatch the setUser action to update Redux store
      return response.data.review;
    } catch (error) {
      // toast.error('Load failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getReviewByRoomAsync = createAsyncThunk(
  'review/getReviewByRoom',
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/reviews/rooms/${id}`);
      thunkAPI.dispatch(setReview(response.data.review)); // Dispatch the setUser action to update Redux store
      return response.data.review;
    } catch (error) {
      // toast.error('Load failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setReview(state, action) {
      state.review = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRewviewAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllRewviewAsync.fulfilled, (state, action) => {
        state.review = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getAllRewviewAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getAllRoomReviewsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllRoomReviewsAsync.fulfilled, (state, action) => {
        state.review = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getAllRoomReviewsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getReviewByIdAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getReviewByIdAsync.fulfilled, (state, action) => {
        state.review = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getReviewByIdAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getReviewByRoomAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getReviewByRoomAsync.fulfilled, (state, action) => {
        state.review = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getReviewByRoomAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setReview } = reviewSlice.actions;

export const selectReview = (state) => state.review.review;
export const selectStatus = (state) => state.review.status;
export const selectError = (state) => state.review.error;

export default reviewSlice.reducer;
