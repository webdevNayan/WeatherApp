import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchWeather } from '../../services/api';

const WeatherContainer = styled.div`
  margin-top: 20px;
`;

const WeatherCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface WeatherPageProps {
  cityName: string;
}

const WeatherPage: React.FC<WeatherPageProps> = ({ cityName }) => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeather(cityName);
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchData();
  }, [cityName]);

  return (
    <WeatherContainer>
      <h2>Weather for {cityName}</h2>
      {weather && (
        <WeatherCard>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
          {/* Render more weather information as needed */}
        </WeatherCard>
      )}
    </WeatherContainer>
  );
};

export default WeatherPage;
