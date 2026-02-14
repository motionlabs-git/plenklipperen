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

			<section className=''>
				<div className='section-wrapper w-full flex justify-center'>
					<h2 className='text-center sm:w-2/3 leading-12'>
						Vi har erfaring med oppdrag for private boliger,
						borettslag og bedrifter. For oss er god kommunikasjon og
						tydelige avtaler viktig, slik at kundene vet hva de kan
						forvente.{' '}
						<span className='text-darkGray'>
							Vi møter opp som avtalt, gjør jobben ordentlig og
							sørger for et resultat du kan være fornøyd med.
						</span>
					</h2>
				</div>
			</section>

			<span className='divider'></span>

			<References />
		</>
	)
}

export default page
