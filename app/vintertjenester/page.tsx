import PageHeadingSection from '../components/UI/PageHeadingSection'
import WinterServices from '../components/Sections/WinterServices/WinterServices'
import ContactUs from '../components/Sections/Contact/ContactUs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: `Snørydding og vintertjenester i Bergen`,
	description:
		'Profesjonell snørydding og strøing i Bergen. Trygge uteområder hele vinteren for private, borettslag og bedrifter.',
}

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/vinterford.jpg'}
				title={'Bergen winter services ...i Bergen'}
				paragraph={'Some texting about winter Services'}
			/>
			<WinterServices />

			<span className='divider'></span>

			<ContactUs />
		</>
	)
}

export default page
