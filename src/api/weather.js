import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '1e0f0745ddbe4c909c1125452251005';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
        aqi: 'no'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}; 