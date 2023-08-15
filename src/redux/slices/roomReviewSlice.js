import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const getAllRoomReviewsAsync = createAsyncThunk(
//   'review/getAllRoomReviews',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/reviews/rooms/');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getReviewByRoomIdAsync = createAsyncThunk(
  'review/getReviewByRoomId',
  async ({ roomId, per_page, page }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/reviews/rooms/${roomId}?per_page=${per_page}&page=${page}`
      );
      return response.data;
    } catch (error) {
      toast.error('Load getReviewByRoomId failed');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  allReviewByRoomId: {},
  status: 'idle',
  error: null,
  selectReview: {},
};

const roomReviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    removeSelectedReview: (state) => {
      state.selectReview = {};
    },
  },
  extraReducers: {
    // [getAllRoomReviewsAsync.pending]: (state) => {
    //   console.log('Pending');
    //   state.status = 'Pending';
    //   state.error = null;
    // },
    // [getAllRoomReviewsAsync.fulfilled]: (state, { payload }) => {
    //   console.log('Fetched Successfully!');
    //   return { ...state, allRoomReviews: payload };
    // },
    // [getAllRoomReviewsAsync.rejected]: (state, action) => {
    //   console.log('Rejected!');
    //   state.status = 'failed';
    //   state.error = action.payload;
    // },

    [getReviewByRoomIdAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getReviewByRoomIdAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, allReviewByRoomId: payload };
    },
    [getReviewByRoomIdAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { removeSelectedReview } = roomReviewSlice.actions;
// export const getAllRoomReviews = (state) => state.review.allRoomReview.results;
export const getAllReviewByRoomInfo = (state) => state.review.allReviewByRoomId;
export const selectStatus = (state) => state.review.status;
export const selectError = (state) => state.review.error;

export default roomReviewSlice.reducer;
