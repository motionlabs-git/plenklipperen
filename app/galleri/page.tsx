import { Metadata } from 'next'
import Gallery from '../components/Sections/Gallery/Gallery'
import PageHeadingSection from '../components/UI/PageHeadingSection'
import { pageMetadata } from '@/app/lib/seo'

const seo = {
	title: `Galleri – hagearbeid og snørydding i Bergen`,
	description:
		'Se bilder av våre prosjekter innen gressklipping, hagearbeid, trefelling og snørydding i Bergen. Kvalitet og synlige resultater. Plenklipperen - Vi klipper plen!',
	path: '/galleri',
}

export const metadata: Metadata = pageMetadata(seo)

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/grass10.jpg'}
				title={'Galleri av vårt arbeid'}
			/>

			<Gallery />
		</>
	)
}

export default page
