import Temp from './Temp'
import Range from './Range'

export default function TempSection({ tempObj }) {
	const { temp, feels_like, temp_max, temp_min } = tempObj
	return (
		<section className='weather_card__section accent_bg'>
			{/* Current temp */}
			<Temp temp={temp} feelsLike={feels_like} />
			{/* Current Range */}
			<Range highTemp={temp_max} lowTemp={temp_min} />
		</section>
	)
}
