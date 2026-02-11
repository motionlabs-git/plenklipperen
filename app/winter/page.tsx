import React from 'react'
import PageHeadingSection from '../components/UI/PageHeadingSection'
import WinterServices from '../components/Sections/WinterServices/WinterServices'
import ContactUs from '../components/Sections/Contact/ContactUs'

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
