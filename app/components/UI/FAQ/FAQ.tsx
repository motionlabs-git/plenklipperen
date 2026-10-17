import Accordeon from './Accordeon'
import JsonLd from '../../SEO/JsonLd'
import { faqSchema } from '@/app/lib/seo'

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
			<JsonLd data={faqSchema(qaa)} />
			<div className='section-wrapper'>
				<h2>Ofte stilte spørsmål</h2>

				<p className='mt-4'>{subtitle}</p>

				<Accordeon qaa={qaa} />
			</div>
		</section>
	)
}

export default FAQ
