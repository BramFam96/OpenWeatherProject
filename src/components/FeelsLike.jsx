function FeelsLike({ feelsLike }) {
	return (
		<h3 className='feels-like reg_font col'>
			<p className='offset'>Dress for:</p>
			<p className='big_font'>
				{feelsLike}
				<sup>&deg;F</sup>
			</p>
		</h3>
	);
}

export default FeelsLike;
