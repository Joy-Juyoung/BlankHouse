import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAllQnAAsync = createAsyncThunk(
  'help/getAllQnA',
  async ({ kind = '' }, thunkAPI) => {
    try {
      const response = await axios.get(`/feedbacks?kind=${kind}`);
      return response.data;
    } catch (error) {
      toast.error('Load QnA failed.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  allQnA: {},
  status: 'idle',
  error: null,
};

const helpSlice = createSlice({
  name: 'help',
  initialState,

  extraReducers: {
    [getAllQnAAsync.pending]: (state) => {
      console.log('allQnA Pending');
      state.status = 'Pending';
      state.error = null;
    },
    [getAllQnAAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched allQnA Successfully!');
      return { ...state, allQnA: payload };
    },
    [getAllQnAAsync.rejected]: (state, action) => {
      console.log('allQnA Rejected!');
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const getAllQnA = (state) => state.help.allQnA;
export const selectStatus = (state) => state.help.status;
export const selectError = (state) => state.help.error;

export default helpSlice.reducer;
