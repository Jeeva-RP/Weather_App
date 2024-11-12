// src/components/EventForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWeatherCheck } from '../store/event/event-slice';
import { getLatLng } from '../utils/getLatLng';
import fetchData from '../utils/fetchData';
import '../EventForm.css';
const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventDateTime = new Date(`${eventDate}T${eventTime}`);

    try {
      const latLng = await getLatLng(eventLocation);
      console.log("LatLng:", latLng); 
      const weatherData = await fetchData(`https://api.open-meteo.com/v1/forecast?latitude=${latLng.lat}&longitude=${latLng.lng}&hourly=temperature_2m`);
      dispatch(setWeatherCheck({ 
        eventName, 
        eventDateTime: eventDateTime.toISOString(),
        weatherData 
      }));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        required
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={eventLocation}
        onChange={(e) => setEventLocation(e.target.value)}
        required
      />
      <button type="submit">Check Weather</button>
    </form>
  );
};

export default EventForm;
