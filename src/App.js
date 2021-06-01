import React, { useState } from 'react';
//API
import { fetchWeather } from './api/fetchWeather';
//Components
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
//Style
import './App.css';

const App = () => {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});
	const [temp, setTemp] = useState('');

	const search = async (e) => {
		if (e.key === 'Enter') {
			try {
				const data = await fetchWeather(query);
				setWeather(data);
				console.log(data);
			} catch (Error) {
				alert('Invalid City');
			}
			setQuery('');
		}
	};
	
	return (
		<div className='main-container'>
			<Search query={query} setQuery={setQuery} search={search} />
			{weather.main && (
				<WeatherCard
					cityName={weather.name}
					countryName={weather.sys.country}
					currentDescription={weather.weather[0].description}
					weatherImg={weather.weather[0].icon}
					currentTemp={weather.main.temp}
					lowTemp={weather.main.temp_min}
					highTemp={weather.main.temp_max}
					humidity={weather.main.humidity}
					feelsLike={Math.round(weather.main.feels_like)}
					windSpd={Math.round(weather.wind.speed)}
					windDeg={weather.wind.speed}
				/>
			)}
		</div>
	);
};
export default App;
