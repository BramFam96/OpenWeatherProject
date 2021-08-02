import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/onecall'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const fetchForecast = async (lat, lon, exclude, units = 'imperial') => {
	const { data } = await axios.get(URL, {
		params: {
			lat: lat,
			lon: lon,
			exclude: exclude,
            units: units,
			appid: API_KEY,
		},
	})
	return data
}