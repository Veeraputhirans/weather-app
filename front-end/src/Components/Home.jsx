import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "../Components/Home.css";
import search from "../Assets/Images/Search.svg"; 
import temp from "../Assets/Images/temperature.png";// Import search image
import air from "../Assets/Images/air.png";
import humidity from "../Assets/Images/humidity.png";

const API_KEY = "4ff4dcc5f9c19a737939aaf5026856f0"; // Replace with your API key

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [pollution, setPollution] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(weatherResponse.data);
      setError(""); // Clear errors

      // Fetch air pollution data
      const { lat, lon } = weatherResponse.data.coord;
      const pollutionResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      setPollution(pollutionResponse.data);
    } catch (err) {
      setError("City not found. Please enter a valid city.");
      setWeather(null);
      setPollution(null);
    }
  };

  return (
    <div className="container">
      <div className="content-container">
        <h2>Weather App</h2>
        <div className={`search-bar ${isFocused ? "active" : ""}`}>
          <input
            type="text"
            placeholder="Enter a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <FaSearch className="search-icon" onClick={fetchWeather} />
        </div>

        {!weather && (
          <div className="search-image">
            <img src={search} alt="Search Illustration" />
          </div>
        )}

        {error && <p className="error-message">{error}</p>}

        {weather && (
          <div className="weather-info">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
            <p>{weather.weather[0].description}</p>
            <div className="temperature-info">
  <div className="temp-detail">
    <img src={temp} alt="Temperature Icon" />
    <h3>{Math.round(weather.main.temp)}°C</h3>
  </div>
</div>

          
           <div className="weather-details">
  <div className="detail">
    <img src={air} alt="Humidity Icon" />
    <p>Humidity: {weather.main.humidity}%</p>
  </div>
  
  {pollution && (
    <div className="detail">
      <img src={humidity} alt="Air Pollution Icon" />
      <p>Air Quality Index: {pollution.list[0].main.aqi}</p>
    </div>
  )}
</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
