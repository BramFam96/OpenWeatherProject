import Temp from './Temp';
import Range from './Range';


function CurrentWeather({ currentTemp, lowTemp, highTemp }) {
	return (
		<section className='weather-module accent '>
			{/* Current temp */}
			<Temp currentTemp={currentTemp} />
			{/* Current Range */}
			<Range lowTemp={lowTemp} highTemp={highTemp} />
		</section>
	);
}

export default CurrentWeather;
