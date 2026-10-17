import PageHeadingSection from '../components/UI/PageHeadingSection'
import WinterServices from '../components/Sections/WinterServices/WinterServices'
import ContactUs from '../components/Sections/Contact/ContactUs'
import { Metadata } from 'next'
import { pageMetadata, serviceSchema } from '@/app/lib/seo'
import JsonLd from '@/app/components/SEO/JsonLd'

const seo = {
	title: `Snørydding og vintertjenester i Bergen`,
	description:
		'Profesjonell snørydding og strøing i Bergen. Trygge uteområder hele vinteren for private, borettslag og bedrifter.',
	path: '/vintertjenester',
}

export const metadata: Metadata = pageMetadata(seo)

const page = () => {
	return (
		<>
			<JsonLd data={serviceSchema(seo)} />
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
