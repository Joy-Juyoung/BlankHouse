import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import roomsDataService from '../services/RoomsService';

const initialState = [];

// export const createTutorial = createAsyncThunk(
//   "tutorials/create",
//   async ({ title, description }) => {
//     const res = await TutorialDataService.create({ title, description });
//     return res.data;
//   }
// );

export const allRooms = createAsyncThunk('rooms/all', async () => {
  const res = await roomsDataService.getAll();
  return res.data;
});

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  extraReducers: {
    [allRooms.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = roomsSlice;
export default reducer;
