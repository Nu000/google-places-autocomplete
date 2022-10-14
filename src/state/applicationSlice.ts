import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocation, IRootState } from './interfaces';

const initialState: IRootState = {
  recentLocations: [],
};

export const applicationSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    addLocation(state, action) {
      state.recentLocations = [...state.recentLocations, action.payload];
    },
  },
});

export const {
  addLocation,

} = applicationSlice.actions;

export default applicationSlice.reducer;
