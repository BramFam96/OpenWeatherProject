import { useState, useEffect } from 'react'
//API
import { fetchWeather } from './api/fetchWeather'
//Components
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
//Style
import './index.css'

const App = () => {
	const [query, setQuery] = useState('')
	const [weather, setWeather] = useState({})

	const LOCAL_STORAGE_KEY = 'mattsWeather.app.weather'

	//Local Storage Get Method

	useEffect(() => {
		const weatherJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
		weatherJSON != null ? setWeather(JSON.parse(weatherJSON)) : defaultCall()
		//eslint-disable-next-line
	}, [])
	//Local Storage Set Method

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(weather))
	}, [weather])

	//Default data
	useEffect(() => {
		defaultCall()
		//eslint-disable-next-line
	}, [])

	const defaultCall = () => {
		const defaultQuery = 'Chicago'
		handleFetchWeather(defaultQuery)
	}
	//Logic for fetching weather
	const handleFetchWeather = async (query) => {
		const data = await fetchWeather(query)
		setWeather(data)
		// console.log(data)
	}

	return (
		<div className='app_container'>
			<Search
				query={query}
				setQuery={setQuery}
				handleFetchWeather={handleFetchWeather}
			/>
			{weather.main && (
				<WeatherCard
					weatherObj={weather}
					// const {name, main, sys, weather} = weather
					// cityName={weather.name}
					// countryName={weather.sys.country}
					// currentDescription={weather.weather[0].description}
					// weatherImg={weather.weather[0].icon}
					// currentTemp={weather.main.temp}
					// lowTemp={weather.main.temp_min}
					// highTemp={weather.main.temp_max}
					// humidity={weather.main.humidity}
					// feelsLike={Math.round(weather.main.feels_like)}
					// windSpd={Math.round(weather.wind.speed)}
					// windDeg={weather.wind.deg}
				/>
			)}
		</div>
	)
}
export default App
