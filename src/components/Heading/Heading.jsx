import Location from './Location'
export default function Heading({ cityName, countryName }) {
	return (
		<section className='heading_section'>
			<h1>
				<Location cityName={cityName} countryName={countryName} />
			</h1>
			<h2>Currently:</h2>
		</section>
	)
}
