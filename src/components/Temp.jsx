function Temp({ currentTemp }) {
	return (
		<section>
			<h3 className='big_font currentTemp '>
				{Math.round(currentTemp)}
				<sup>&deg;F</sup>
			</h3>
		</section>
	);
}

export default Temp;
