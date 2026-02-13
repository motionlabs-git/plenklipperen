import { Metadata } from 'next'
import References from '../components/Layout/Footer/References'
import Hero from '../components/Sections/About/Hero'

export const metadata: Metadata = {
	title: `Om oss | Din lokale partner i Bergen`,
	description:
		'Lær mer om Plenklipperen og våre tjenester innen hagearbeid og vintervedlikehold i Bergen. Lokal, pålitelig og profesjonell. Plenklipperen - Vi klipper plen!',
}

const page = () => {
	return (
		<>
			<Hero />

			<span className='divider'></span>

			<References />
		</>
	)
}

export default page
