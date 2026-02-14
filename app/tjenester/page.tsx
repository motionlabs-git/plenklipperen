import { Metadata } from 'next'
import ContactUs from '../components/Sections/Contact/ContactUs'
import SummerServices from '../components/Sections/SummerServices/SummerServices'
import PageHeadingSection from '../components/UI/PageHeadingSection'

export const metadata: Metadata = {
	title: `Hagetjenester og trefelling i Bergen`,
	description:
		'Komplett hagevedlikehold, gressklipping og trefelling i Bergen. Skreddersydde løsninger for private og næringskunder. Plenklipperen - Vi klipper plen!',
}

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/grass4.jpg'}
				title={'Våre tjenester'}
				paragraph={
					'Komplett hagevedlikehold, gressklipping og trefelling i Bergen. Skreddersydde løsninger for private og næringskunder. Plenklipperen - Vi klipper plen!'
				}
			/>

			<SummerServices />

			<span className='divider'></span>

			<ContactUs />
		</>
	)
}

export default page
