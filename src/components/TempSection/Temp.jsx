import FeelsLike from './FeelsLike';
export default function Temp({ temp, feelsLike }) {


	return (
		<div className='temps col'>
			<h3 className='big_font ' >
				{Math.round(temp)}
				<sup>&deg;F</sup>
			</h3>
			{feelsLike && (
				<p className='feelsLike med_font big_temp'>
				( <FeelsLike feelsLike={feelsLike}/> )
				</p>
			)}			
		</div>
	);
}

