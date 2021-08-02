export default function Info({ icon, description }) {
	return (
		<h2 className='weather-info col '>
			<img
				className='weather-info-icon '
				alt={description}
				src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
			/>
			<p className='reg_font cap'>{description}</p>
			
		</h2>
	);
}


