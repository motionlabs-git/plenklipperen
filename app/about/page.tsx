import React from 'react'
import PageHeadingSection from '../components/UI/PageHeadingSection'

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/hero_image.webp'}
				title={'About us'}
				paragraph={
					'Empowering farmers with innovative, eco-friendly practices to meet rising global food demands'
				}
			/>
		</>
	)
}

export default page
