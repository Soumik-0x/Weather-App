import React, { useState } from "react";
import { fetchWeather } from "../api/weather";


const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      setError(null);
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error) {
      setError("Could not fetch weather data");
    }
  };

  return (
    <div className="main1">
      <h1 id="heding">Weather App</h1>
      
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div id="wea1">
          <h2 id="wea2">City/Location: {weather.name}</h2>
          <p id="wea3">Temperature: {weather.main.temp}°C</p>
          <p id="wea4">Description: {weather.weather[0].description}</p>
        </div>
      )}
      <p id="name">Made by :- Soumik</p>
    </div>
  );
};

export default Weather;
