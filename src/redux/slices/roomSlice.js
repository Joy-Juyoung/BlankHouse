import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {};

export const getAllRoomsAsync = createAsyncThunk(
  'room/getAllRoomInfo',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/rooms');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRoomsByIdAsync = createAsyncThunk(
  'room/getRoomInfoById',
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/rooms/${id}`, {
        id,
      });
      // thunkAPI.dispatch(setRoom(response.data.room));
      return response.data.room;
    } catch (error) {
      toast.error('Load failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    // setRoom(state, action) {
    //   state[action.payload.id] = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRoomsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllRoomsAsync.fulfilled, (state, action) => {
        // action.payload.forEach((room) => {
        //   state[room.id] = room;
        // });
        state.room = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getAllRoomsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getRoomsByIdAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getRoomsByIdAsync.fulfilled, (state, action) => {
        // state[action.payload.id] = action.payload;
        const room = action.payload;
        state[room.id] = room;
        // state.room = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getRoomsByIdAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setRoom } = roomSlice.actions;

export const selectRoom = (state) => state.room;
export const selectStatus = (state) => state.room.status;
export const selectError = (state) => state.room.error;

export default roomSlice.reducer;
