export default function SevenDayForecast(dailyForecast, { day }) {
	const { temp, feels_like, weather, sunrise, sunset } = dailyForecast
	return (
		<div className='daily_forecast_card accent_bg'>
			<img
				className='forecast_weather_icon '
				alt={weather[0].description}
				src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
			/>
			<p>{weather[0].main}</p>
			<p>
				{Math.round(temp.day)}
				<sup>&deg;F</sup>
			</p>
			<p>
				( {Math.round(feels_like.day)}
				<sup>&deg;F</sup> )
			</p>
		</div>
	)
}
