import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const bookRoomsByIdAsync = createAsyncThunk(
  'room/bookRoomById',
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
  bookingRoom: {},
  status: 'idle',
  error: null,
  // selectRoom: {},
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // removeSelectedRoom: (state) => {
    //   state.selectRoom = {};
    // },
  },
  extraReducers: {
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

export const bookRoom = (state) => state.booking.bookingRoom;
export const selectStatus = (state) => state.booking.status;
export const selectError = (state) => state.booking.error;

export default bookingSlice.reducer;
