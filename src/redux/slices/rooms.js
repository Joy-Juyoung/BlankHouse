import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import roomsDataService from '../services/RoomsService';

const initialState = [];

export const allRooms = createAsyncThunk('rooms/all', async () => {
  const res = await roomsDataService.getAll();
  return res.data;
});

export const roomById = createAsyncThunk(
  'rooms/getRoomById',
  async ({ id }) => {
    const res = await roomsDataService.getRoomById(id);
    return res.data;
  }
);

// export const allRoomCategories = createAsyncThunk(
//   'rooms/all/categories',
//   async () => {
//     const res = await roomsDataService.getAllRoomCategories();
//     return res.data;
//   }
// );

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  extraReducers: {
    [allRooms.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [roomById.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    // [allRoomCategories.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});

const { reducer } = roomsSlice;
export default reducer;
