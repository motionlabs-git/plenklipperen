import React from 'react'
import Accordeon from './Accordeon'

const FAQ = () => {
	return (
		<section>
			<div className='section-wrapper'>
				<h2>Ofte stilte spørsmål</h2>

				<p className='mt-4'>
					Her er svarene på de vanligste spørsmålene vi mottar. Hvis
					du ikke finner svaret her, ikke nøl med å kontakte oss.
				</p>

				<Accordeon />
			</div>
		</section>
	)
}

export default FAQ
