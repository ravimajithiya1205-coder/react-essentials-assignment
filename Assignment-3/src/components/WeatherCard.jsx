import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="card shadow p-4 mt-3 mx-auto">
      <h3>{weather.name}</h3>
      <h1>{weather.main.temp}°C</h1>

      <p>🌥️ {weather.weather[0].main}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬️ Wind: {weather.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;