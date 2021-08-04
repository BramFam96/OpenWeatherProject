export default function Location({ cityName, countryName }) {
	return (
		<div>
			<h1 className='city'>{cityName}</h1>
			<sup className='city_sup accent-bg'>{countryName}</sup>
		</div>
	)
}
