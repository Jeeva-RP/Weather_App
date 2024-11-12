// src/components/EventList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { getWeatherRecommendation } from '../store/event/event-slice';

const EventList = () => {
  const events = useSelector((state) => state.event.events);

  return (
    <div>
      <h2>Your Events</h2>
      {events.map((event, index) => {
        const recommendation = getWeatherRecommendation(event.weatherData, new Date(event.eventDateTime));
        return (
          <div key={index}>
            <h3>{event.eventName}</h3>
            <p>Date & Time: {event.eventDateTime.toString()}</p>
            <p>Recommendation: {recommendation}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
