import { useState, useEffect } from 'react'
import { fetchForecast } from '../api/fetchForecast'
//Component Imports:

import Heading from './Heading/Heading'
// import Alert from './Alert'
import TempSection from './TempSection/TempSection'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import ForecastContainer from './Forecast/ForecastContainer'

function WeatherCard({ weatherObj }) {
	const [forecast, setForecast] = useState({})

	useEffect(() => {
		handleFetchForecast(coord)
		//eslint-disable-next-line
	}, [weatherObj])

	async function handleFetchForecast(coord) {
		const forecastCoords = await coord
		const { lat, lon } = forecastCoords
		const forecastData = await fetchForecast(lat, lon)

		setForecast(forecastData)
		console.log(forecastData)
	}

	const { name, sys, main, weather, wind, coord } = weatherObj
	const { humidity } = main

	return (
		<main className='weather_card'>
			{/* City */}

			<Heading cityName={name} countryName={sys.country} />

			{/* Current weather info */}
			<TempSection tempObj={main} />
			{/* Additional Info */}
			{forecast.minutely && (
				<WeatherDetails
					forecastObj={forecast.minutely}
					humidity={humidity}
					infoObj={weather}
					windObj={wind}
				/>
			)}
			{forecast.daily && <ForecastContainer dailyForecasts={forecast.daily} />}
			<p style={{ textAlign: 'right', fontSize: '0.75rem' }}>
				*Temperatures in parenthesis represent how the weather feels
			</p>
		</main>
	)
}

export default WeatherCard
