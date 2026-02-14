import { Metadata } from 'next'
import Gallery from '../components/Sections/Gallery/Gallery'
import PageHeadingSection from '../components/UI/PageHeadingSection'

export const metadata: Metadata = {
	title: `Galleri | Hagearbeid og snørydding i Bergen`,
	description:
		'Se bilder av våre prosjekter innen gressklipping, hagearbeid, trefelling og snørydding i Bergen. Kvalitet og synlige resultater. Plenklipperen - Vi klipper plen!',
}

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/grass10.jpeg'}
				title={'Galleri av vårt arbeid'}
			/>

			<Gallery />
		</>
	)
}

export default page
