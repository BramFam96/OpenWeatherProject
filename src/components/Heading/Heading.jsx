import Location from './Location'
export default function Heading({ cityName, countryName }) {
	return (
		<section className='heading_section'>
			<Location cityName={cityName} countryName={countryName} />
			<h2>Currently:</h2>
		</section>
	)
}
