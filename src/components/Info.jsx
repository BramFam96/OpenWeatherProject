function Info({ currentDescription, weatherImg }) {
	return (
		<h2 className='weather-info col '>
			<p className='reg_font'>{currentDescription}</p>
			<img
				className='weather-info-icon '
				alt={currentDescription}
				src={`https://openweathermap.org/img/wn/${weatherImg}@2x.png`}
			/>
		</h2>
	);
}

export default Info;
