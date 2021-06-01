
import { FaLocationArrow } from 'react-icons/fa';

function Details({ humidity, currentDescription, windSpd, windDeg }) {
	return (
		<section className='detail reg_font col'>
			<div>
				<p>{currentDescription}</p>
			</div>
			<div>
				<p>Humidity {humidity}%</p>

				<p> </p>
			</div>

			<div>
				<p>
					{windSpd} mph <FaLocationArrow />
				</p>
			</div>
		</section>
	);
}

export default Details;
