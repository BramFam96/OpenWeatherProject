import City from './City';
import WeatherInfo from './CurrentWeather';
import AdditionalWeather from './AdditionalWeather';



function WeatherCard({
	cityName,
	countryName,
	currentDescription,
	weatherImg,
	currentTemp,
	lowTemp,
	highTemp,
	humidity,
	feelsLike,
	windSpd,
	windDeg,
}) {
	return (
		<main className='weather_card'>
			{/* City */}
			<City cityName={cityName} countryName={countryName} />
			{/* Current weather info */}
			<WeatherInfo
				currentDescription={currentDescription}
				weatherImg={weatherImg}
				currentTemp={currentTemp}
				lowTemp={lowTemp}
				highTemp={highTemp}
				feelsLike={feelsLike}
			/>
			{/* Additional Info */}
			<AdditionalWeather
				humidity={humidity}
				feelsLike={feelsLike}
				currentDescription={currentDescription}
				windSpd={windSpd}
				windDeg={windDeg}
			/>
		</main>
	);
}

export default WeatherCard;
