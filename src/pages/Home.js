import React from 'react';
import { useOutletContext } from "react-router-dom";
import Weather from "../components/Weather";
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import getDate from "../utils/getDate";
import '../Homepage.css';
import { getWeatherRecommendation } from '../store/event/event-slice';
import getLatLng from '../utils/getLatLng';

const HomePage = () => {
  const { units, hourly, current_weather } = useOutletContext();
  const { hourlyWeatherCodes, hourlyTimes, hourlyTemperatures } = hourly;

  const [date, currentHour] = [
    "Today ".concat(
      getDate(new Date(), { hour: "numeric", minute: "numeric" })
    ),
    Number(getDate(new Date(), { hour: "numeric", hourCycle: "h23" })),
  ];

  const index = hourlyTimes.findIndex(
    (hourlyTime) =>
      Number(hourlyTime.split("T").at(1).split(":").at(0)) === currentHour
  );

  const slicedHours = hourlyTimes.slice(index, index + 13);
  const slicedWeatherCodes = hourlyWeatherCodes.slice(index, index + 13);
  const slicedTemperatures = hourlyTemperatures.slice(index, index + 13);

  const hourlyWeathers = {
    hours: slicedHours,
    codes: slicedWeatherCodes,
    temperatures: slicedTemperatures,
  };

  return (
    <div className="home-page">
      <div className="weather-container">
        <Weather
          weather={current_weather}
          units={units}
          date={date}
          hourlyWeathers={hourlyWeathers}
        />
      </div>
      <div className="events-container">
        <h1>Weather App</h1>
        <EventForm />
        <EventList />
      </div>
    </div>
  );
};

export default HomePage;
