// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import animationsSlice from './animations/animations-slice';
import locationSlice from './location/location-slice';
import themeSlice from './theme/theme-slice';
import eventSlice from './event/event-slice'; 

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    location: locationSlice,
    animation: animationsSlice,
    event: eventSlice,
  },
});
