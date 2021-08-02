import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

function Range({ lowTemp, highTemp }) {
	return (
		<section className='col'>
			<p className='med_font'>
				<BiUpArrow
					className='high arrow'
					aria-label='High of'
					style={{ color: 'red' }}
				/>

				{Math.round(highTemp)}
				<sup>&deg;F</sup>
			</p>
			<p className='med_font'>
				<BiDownArrow
					className='arrow'
					aria-label='Low of'
					style={{ color: 'blue' }}
				/>
				{Math.round(lowTemp)}

				<sup>&deg;F</sup>
			</p>
		</section>
	);
}

export default Range;
