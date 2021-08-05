import SevenDayForecast from './SevenDayForecast'

export default function ForecastContainer({ dailyForecasts }) {
	// let d = new Date()
	// const weekDay = [
	// 	'Sunday',
	// 	'Monday',
	// 	'Tuesday',
	// 	'Wednesday',
	// 	'Thursday',
	// 	'Friday',
	// 	'Saturday',
	// ]
	// // const handleDayTitles = (d) => {
	// // 	for (let theDay = 0; theDay <= weekDay.length; theDay++) {
	// // 		const today = weekDay[d.getDay()]
	// // 	}
	// // 	const calculatedDay = weekDay[d.getDay()]
	// // }
	return (
		<>
			<h2 className='sevenDay_heading'>Weekly forecast:</h2>
			<div className='daily_forecast_container'>
				{dailyForecasts &&
					dailyForecasts.map((dailyForecast) => (
						<SevenDayForecast
							{...dailyForecast}
							id={dailyForecasts.sunrise}
							// day={calculatedDay}
						/>
					))}
			</div>
		</>
	)
}
