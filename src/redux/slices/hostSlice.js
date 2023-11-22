import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const listingRoomAsync = createAsyncThunk(
  'host/listingRoom',
  async (
    {
      name,
      address,
      city,
      country,
      price,
      cleaning_fee,
      number_of_room,
      number_of_toilet,
      number_of_bed,
      maximum_guests,
      pet_friendly,
      house_type,
      category_id,
      amenities_id,
      description,
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(`/rooms`, {
        name,
        address,
        city,
        country,
        price,
        cleaning_fee,
        number_of_room,
        number_of_toilet,
        number_of_bed,
        maximum_guests,
        pet_friendly,
        house_type,
        category_id,
        amenities_id,
        description,
      });
      return response.data;
    } catch (error) {
      toast.error('Listing room failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadPhotosAsync = createAsyncThunk(
  'host/uploadPhotos',
  async ({ picture, description, room_pk }, thunkAPI) => {
    try {
      const response = await axios.post(
        '/photos/room/picture',
        {
          picture,
          description,
          room_pk,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      toast.error('upload Photo failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteRoomAsync = createAsyncThunk(
  'host/deleteRoom',
  async ({ room_pk }, thunkAPI) => {
    try {
      const response = await axios.delete('/rooms', {
        room_pk,
      });
      return response.data;
    } catch (error) {
      toast.error('upload Photo failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  listingRoom: {},
  uploadPic: {},
  status: 'idle',
  error: null,
  // selectRoom: {},
};

const hostSlice = createSlice({
  name: 'host',
  initialState,
  extraReducers: {
    [listingRoomAsync.pending]: (state) => {
      // console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [listingRoomAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, listingRoom: payload };
    },
    [listingRoomAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },

    [uploadPhotosAsync.pending]: (state) => {
      // console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [uploadPhotosAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, uploadPic: payload };
    },
    [uploadPhotosAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const HostListingRoom = (state) => state.host.listingRoom;
export const uploadPicture = (state) => state.host.uploadPic;
export const selectStatus = (state) => state.host.status;
export const selectError = (state) => state.host.error;

export default hostSlice.reducer;
