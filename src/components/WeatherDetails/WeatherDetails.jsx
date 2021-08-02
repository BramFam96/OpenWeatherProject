import Info from './Info'
import DataTable from './DataTable/DataTable'

export default function WeatherDetails({
	infoObj,
	forecastObj,
	humidity,
	windObj,
}) {
	const { description, icon } = infoObj[0]

	return (
		<section className='weather_card__section accent_bg'>
			<Info icon={icon} description={description} />
			<DataTable forecastObj={forecastObj} humidity={humidity} windObj={windObj} />
		</section>
	)
}
