import React from 'react';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';

function AdditionalWeather({
	humidity,
	feelsLike,
	currentDescription,
	windSpd,
	windDeg,
}) {
	return (
		<section className='weather-module accent'>
			<FeelsLike feelsLike={feelsLike} />
			<Humidity
				humidity={humidity}
				currentDescription={currentDescription}
				windSpd={windSpd}
				windDeg={windDeg}
			/>
		</section>
	);
}

export default AdditionalWeather;
