import { RootState } from './store';

export const getLocations = (state: RootState) => state.locations.recentLocations;
