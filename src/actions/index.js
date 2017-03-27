import axios from 'axios';

const API_KEY = 'e7af44d1bf1fc792059a2c6d9e75e34a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns a promise object
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}