function City({ cityName, countryName }) {
	return (
		<section className='city-name '>
			<h1>{cityName}</h1>
			<sup className='accent'>{countryName}</sup>
		</section>
	);
}
export default City;
