import axios from "axios";

const API_KEY = "your_api_key";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
