import React, { useEffect, useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const App = () => {
  const [city, setCity] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Cache to store previous results
  const cache = useRef({});

  // 🔥 Rate limit control
  const lastCallTime = useRef(0);

  // 🔥 Debounce timer
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (!city) return;

    // 🔥 Debounce (wait 1 sec before API call)
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      const now = Date.now();

      // 🔥 Rate limit (1 request per second)
      if (now - lastCallTime.current < 1000) return;

      lastCallTime.current = now;

      // 🔥 Prevent duplicate API call
      if (city === weather?.name) return;

      // 🔥 Check cache first
      if (cache.current[city]) {
        setWeather(cache.current[city]);
        return;
      }

      const controller = new AbortController();

      const fetchWeather = async () => {
        try {
          setLoading(true);
          setError("");

          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("City not found");

          const data = await res.json();

          // 🔥 Save to cache
          cache.current[city] = data;

          setWeather(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();

      return () => controller.abort();
    }, 1000); // debounce delay

  }, [city]);

  return (
    <div className="container text-center mt-5">
      <div className="weather-card mx-auto">
      <h4>🌤️ Weather Dashboard</h4>

      <SearchBar setCity={setCity} />

      {loading && <p>Loading weather data...</p>}
      {error && <p className="text-danger">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
    </div>
  );
};

export default App;