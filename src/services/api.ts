import axios from 'axios';

const CITY_API_BASE_URL = 'https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/';
const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

export const fetchCities = async () => {
    try {
        const response = await axios.get(`${CITY_API_BASE_URL}?disjunctive.cou_name_en&sort=name`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};

export const fetchWeather = async (cityName: string) => {
    try {
        const response = await axios.get(WEATHER_API_BASE_URL, {
            params: {
                q: cityName,
                appid: API_KEY,
                units: 'metric' // Specify units as metric for Celsius
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        throw error;
    }
};
