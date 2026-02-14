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
				image={'/images/vinter3.jpg'}
				title={'Snørydding og vintertjenester'}
				paragraph={
					'Profesjonell snørydding og strøing i Bergen. Trygge uteområder hele vinteren for private, borettslag og bedrifter.'
				}
			/>
			<WinterServices />

			<span className='divider'></span>

			<ContactUs />
		</>
	)
}

export default page
