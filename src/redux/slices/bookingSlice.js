import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAllBookingAsync = createAsyncThunk(
  'booking/getAllBookingInfo',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/bookings');
      return response.data;
    } catch (error) {
      toast.error('Load getAllRooms failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  // async (_, thunkAPI) => {
  //   try {
  //     const response = await axios.get('/bookings');
  //     return response.data;
  //   } catch (error) {
  //     toast.error('Load getAllBookings failed.');
  //     return thunkAPI.rejectWithValue(error.message);
  //   }
  // }
);

export const getBookingByIdAsync = createAsyncThunk(
  'booking/getBookingInfo',
  async ({ bookId }, thunkAPI) => {
    try {
      const response = await axios.get(`/bookings/${bookId}`);
      return response.data;
    } catch (error) {
      toast.error('Load getBookingById failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bookRoomsByIdAsync = createAsyncThunk(
  'booking/bookRoomById',
  async ({ roomId, checkIn, checkOut, guests }, thunkAPI) => {
    try {
      const response = await axios.post(`/rooms/${roomId}/bookings`, {
        check_in: checkIn,
        check_out: checkOut,
        guests,
      });
      return response.data;
    } catch (error) {
      toast.error('bookRooms failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  allBooking: {},
  bookingDetail: {},
  bookingRoom: {},
  status: 'idle',
  error: null,
  // selectRoom: {},
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  // reducers: {
  //   removeSelectedRoom: (state) => {
  //     state.selectRoom = {};
  //   },
  // },
  extraReducers: {
    [getAllBookingAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getAllBookingAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, allBooking: payload };
    },
    [getAllBookingAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },

    [getBookingByIdAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getBookingByIdAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, bookingDetail: payload };
    },
    [getBookingByIdAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },

    [bookRoomsByIdAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [bookRoomsByIdAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, bookingRoom: payload };
    },
    [bookRoomsByIdAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const getAllBookingInfo = (state) => state.booking.allBooking;
export const getBookingDetail = (state) => state.booking.bookingDetail;
export const bookRoom = (state) => state.booking.bookingRoom;
export const selectStatus = (state) => state.booking.status;
export const selectError = (state) => state.booking.error;

export default bookingSlice.reducer;
