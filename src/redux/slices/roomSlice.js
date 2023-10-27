import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const getRomsData = {keyword, category, rating, house_type};

export const getAllRoomsAsync = createAsyncThunk(
  'room/getAllRoomInfo',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/rooms');
      return response.data;
    } catch (error) {
      toast.error('Load getAllRooms failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilterRoomsAsync = createAsyncThunk(
  'room/getFilterRoomInfo',
  async (
    {
      // owner_name = '',
      keyword = '',
      country = '',
      city = '',
      category = '',
      house_type,
      number_of_beds,
      number_of_bedrooms,
      number_of_toilets,
      mininum_price = '',
      maximum_price = '',
      maximum_guests = '',
      // check_in = '',
      // check_out = '',
    },
    thunkAPI
  ) => {
    try {
      // const response = await axios.get(`/rooms?owner_name=${owner_name || ''}
      //   &country=${country || ''}
      //   &city=${city}
      //   &category=${category || ''}
      //   &house_type=${house_type || ''}
      //   &mininum_price=${mininum_price || ''}
      //   &maximum_price=${maximum_price || ''}
      //   &maximum_guests=${maximum_guests || ''}
      //   &check_in=${check_in || ''}
      //   &check_out=${check_out || ''}`);   &maximum_guests=${maximum_guests}

      const response =
        await axios.get(`/rooms?keyword=${keyword}&maximum_guests=${maximum_guests}&country=${country}&city=${city}&category=${category}&house_type=${house_type}&number_of_beds=${number_of_beds}&number_of_bedrooms=${number_of_bedrooms}&number_of_toilets=${number_of_toilets}&mininum_price=${mininum_price}&maximum_price=${maximum_price}
       
        `);
      return response.data;
    } catch (error) {
      toast.error('Load FilterRooms failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRoomsByIdAsync = createAsyncThunk(
  'room/getRoomInfoById',
  async ({ roomId }, thunkAPI) => {
    try {
      const response = await axios.get(`/rooms/${roomId}`);
      // thunkAPI.dispatch(setRoom(response.data.room));
      // return response.data.room;
      return response.data;
    } catch (error) {
      toast.error('Load getRoomsById failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllAmenityAsync = createAsyncThunk(
  'room/getAllAmenity',
  // async (_, thunkAPI) => {
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/rooms/amenities');
      return response.data;
    } catch (error) {
      toast.error('getAllAmenity failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const bookRoomsByIdAsync = createAsyncThunk(
//   'room/bookRoomById',
//   async ({ roomId, checkIn, checkOut, guests }, thunkAPI) => {
//     try {
//       const response = await axios.post(`/rooms/${roomId}/bookings`, {
//         check_in: checkIn,
//         check_out: checkOut,
//         guests,
//       });
//       return response.data;
//     } catch (error) {
//       toast.error('bookRooms failed.');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

const initialState = {
  allRooms: {},
  filterRooms: {},
  roomById: {},
  allAmenity: {},
  status: 'idle',
  error: null,
  selectRoom: {},
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    removeSelectedRoom: (state) => {
      state.selectRoom = {};
    },
  },
  extraReducers: {
    [getAllRoomsAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getAllRoomsAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, allRooms: payload };
    },
    [getAllRoomsAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },

    [getFilterRoomsAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getFilterRoomsAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, filterRooms: payload };
    },
    [getFilterRoomsAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },

    [getRoomsByIdAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getRoomsByIdAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, roomById: payload };
    },
    [getRoomsByIdAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },

    [getAllAmenityAsync.pending]: (state) => {
      console.log('Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getAllAmenityAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, allAmenity: payload };
    },
    [getAllAmenityAsync.rejected]: (state, action) => {
      console.log('Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },

    // [bookRoomsByIdAsync.pending]: (state) => {
    //   console.log('Pending');
    //   state.status = 'Pending';
    //   state.error = null;
    // },
    // [bookRoomsByIdAsync.fulfilled]: (state, { payload }) => {
    //   console.log('Fetched Successfully!');
    //   return { ...state, bookingRoom: payload };
    // },
    // [bookRoomsByIdAsync.rejected]: (state, action) => {
    //   console.log('Rejected!');
    //   state.status = 'failed';
    //   state.error = action.payload;
    // },
  },
});

export const { removeSelectedRoom } = roomSlice.actions;
export const getAllRoomInfo = (state) => state.room.allRooms.results;
export const getFilterRoomInfo = (state) => state.room.filterRooms.results;
export const getRoomInfo = (state) => state.room.roomById;
export const getAllAmenity = (state) => state.room.allAmenity;
// export const bookRoom = (state) => state.room.bookingRoom;
export const getSelectedRoomInfo = (state) => state.room.selectRoom;
export const selectStatus = (state) => state.room.status;
export const selectError = (state) => state.room.error;

export default roomSlice.reducer;
