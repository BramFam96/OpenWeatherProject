import WindDirection from './WindDirection'

export default function DataTable({ forecastObj, humidity, windObj }) {
	const rainChance = forecastObj[0].precipitation
	const { speed, deg } = windObj

	return (
		<section className='detail reg_font col'>
			{forecastObj && (
				<div>
					<p>Rain: {rainChance}%</p>
				</div>
			)}

			<div>
				<p>Humidity {humidity}%</p>

				<p> </p>
			</div>

			<div>
				<p>
					{speed} mph <WindDirection direction={deg} />
				</p>
			</div>
		</section>
	)
}
