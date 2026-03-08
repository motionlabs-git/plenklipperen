import Accordeon from './Accordeon'

const FAQ = ({
	subtitle,
	qaa,
}: {
	subtitle: string
	qaa: {
		q: string
		a: string
	}[]
}) => {
	return (
		<section>
			<div className='section-wrapper'>
				<h2>Ofte stilte spørsmål</h2>

				<p className='mt-4'>{subtitle}</p>

				<Accordeon qaa={qaa} />
			</div>
		</section>
	)
}

export default FAQ
