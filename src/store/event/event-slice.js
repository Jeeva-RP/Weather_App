// src/store/event/event-slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setWeatherCheck(state, action) {
      const { eventName, eventDateTime, weatherData } = action.payload;
      // Parse the ISO string back to a Date object
      const parsedDateTime = new Date(eventDateTime);
      state.events.push({ eventName, eventDateTime: parsedDateTime, weatherData });
    },
  },
});

export const getWeatherRecommendation = (weatherData, eventDateTime) => {
  const eventHour = eventDateTime.getHours();
  const weatherAtEventTime = weatherData.hourly.temperature_2m[eventHour];

  if (weatherAtEventTime < 15) {
    return "It might be cold, consider dressing warmly.";
  } else if (weatherAtEventTime >= 15 && weatherAtEventTime < 25) {
    return "The weather looks pleasant for the event.";
  } else {
    return "It might be hot, consider bringing water.";
  }
};

export const { setWeatherCheck } = eventSlice.actions;
export default eventSlice.reducer;
