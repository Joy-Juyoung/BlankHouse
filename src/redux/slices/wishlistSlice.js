import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getWishlistAsync = createAsyncThunk(
  'wishlist/getWishlists',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/wishlists/rooms');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRoomWishlistAsync = createAsyncThunk(
  'wishlist/addToRoomWishlist',
  async ({ room_pk }, thunkAPI) => {
    try {
      const response = await axios.put('/wishlists/rooms', {
        room_pk,
      });
      return response.data;
    } catch (error) {
      toast.error('Add wishlist failed', {
        position: toast.POSITION.TOP_CENTER,
        closeButton: true,
        autoClose: 1000,
        progressBar: true,
        allowHtml: true,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  getRoomWishlist: {},
  addedRoomWishlist: {},
  status: 'loading',
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist(state, action) {
      state.addedRoomWishlist = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
  },
  extraReducers: {
    [getWishlistAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getWishlistAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, getRoomWishlist: payload };
    },
    [getWishlistAsync.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [addRoomWishlistAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [addRoomWishlistAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, addedRoomWishlist: payload };
    },
    [addRoomWishlistAsync.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setWishlist } = wishlistSlice.actions;

export const RoomAllWishlist = (state) => state.wishlist.getRoomWishlist.rooms;
export const RoomAddWishlist = (state) => state.wishlist.addedRoomWishlist;
export const selectStatus = (state) => state.wishlist.status;
export const selectError = (state) => state.wishlist.error;

export default wishlistSlice.reducer;
