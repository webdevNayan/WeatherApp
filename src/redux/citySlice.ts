import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store'; // Assuming your store file is named store.ts

// Define the type for city state
interface CityState {
  cities: City[];
}

// Define the initial state
const initialState: CityState = {
  cities: [],
};

// Define the city interface
interface City {
  id: number;
  name: string;
  country: string;
  timezone: string;
  // Add more properties as needed
}

// Create a city slice
const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCities: (state, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    },
    // Add more reducers as needed
  },
});

// Export actions and reducer
export const { setCities } = citySlice.actions;

export const selectCities = (state: RootState) => state.city.cities;

export default citySlice.reducer;
