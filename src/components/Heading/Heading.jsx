export default function Heading({ cityName, countryName }) {
	return (
		<section className='heading_section'>
			<h1 className='city'>{cityName}</h1>
			<sup className='city_sup accent-bg'>{countryName}</sup>
		</section>
	)
}
