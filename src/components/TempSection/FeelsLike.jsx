
export default function FeelsLike({ feelsLike }) {
	return (			
			<p className='med_font'>
				{Math.round(feelsLike)}
				<sup>&deg;F</sup>
			</p>
	
	);
}

