import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import experiencesDataService from '../services/ExperiencesService';

const initialState = [];

export const allExperiences = createAsyncThunk('experiences/all', async () => {
  const res = await experiencesDataService.getAll();
  return res.data;
});

export const experienceById = createAsyncThunk(
  'experiences/getExperienceById',
  async ({ id }) => {
    const res = await experiencesDataService.getExperienceById(id);
    return res.data;
  }
);

const experienceSlice = createSlice({
  name: 'experiences',
  initialState,
  extraReducers: {
    [allExperiences.fulfilled]: (state, action) => {
      return [action.payload];
    },
    [experienceById.fulfilled]: (state, action) => {
      return [action.payload];
    },
  },
});

const { reducer } = experienceSlice;
export default reducer;
