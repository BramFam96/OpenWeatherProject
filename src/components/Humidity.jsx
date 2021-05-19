import { FaLocationArrow } from 'react-icons/fa';
function Humidity({ humidity, currentDescription, windSpd, windDeg }) {
	return (
		<section className='details reg_font col'>
			<div>
				<p>{currentDescription}</p>
			</div>
			<div>
				<p>Humidity:</p>
				<p>{humidity}%</p>
			</div>

			<div>
				<p>{windSpd} mph</p>
				<FaLocationArrow />
			</div>
		</section>
	);
}

export default Humidity;
