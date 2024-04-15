import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice'; // Assuming your city slice file is named citySlice.ts

// Configure the Redux store
const store = configureStore({
  reducer: {
    city: cityReducer,
    // Add more reducers here if needed
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
