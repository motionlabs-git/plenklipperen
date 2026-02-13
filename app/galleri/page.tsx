import { Metadata } from 'next'
import Gallery from '../components/Sections/Gallery/Gallery'
import PageHeadingSection from '../components/UI/PageHeadingSection'

export const metadata: Metadata = {
	title: `Galleri`,
	description: '',
}

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/vinterford.jpg'}
				title={'Galleri av vårt arbeid'}
			/>

			<Gallery />
		</>
	)
}

export default page
