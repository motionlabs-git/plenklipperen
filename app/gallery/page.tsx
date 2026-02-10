import Gallery from '../components/Sections/Gallery/Gallery'
import PageHeadingSection from '../components/UI/PageHeadingSection'

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/vinterford.jpg'}
				title={'Plenklipperen gallery'}
			/>

			<Gallery />
		</>
	)
}

export default page
