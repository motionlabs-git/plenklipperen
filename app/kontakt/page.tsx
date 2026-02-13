import { Metadata } from 'next'
import ContactUs from '../components/Sections/Contact/ContactUs'
import FAQ from '../components/Sections/Contact/FAQ/FAQ'
import Hero from '../components/Sections/Contact/Hero'

export const metadata: Metadata = {
	title: `Kontakt oss | Hagearbeid i Bergen`,
	description:
		'Trenger du gressklipping, hagevedlikehold eller snørydding i Bergen? Kontakt oss i dag for et uforpliktende tilbud. Plenklipperen - Vi klipper plen!',
}

const Contact = () => {
	return (
		<>
			<Hero />
			<ContactUs />
			<span className='divider'></span>
			<FAQ />
		</>
	)
}

export default Contact
