import { Metadata } from 'next'
import ContactUs from '../components/Sections/Contact/ContactUs'
import FAQ from '../components/Sections/Contact/FAQ/FAQ'
import Hero from '../components/Sections/Contact/Hero'

export const metadata: Metadata = {
	title: `Kontakt oss`,
	description: '',
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
