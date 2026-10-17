import { Metadata } from 'next'
import References from '../components/Layout/Footer/References'
import Hero from '../components/Sections/About/Hero'
import Vaktmaster from '../components/Sections/Vaktmaster/Vaktmaster'
import { pageMetadata } from '@/app/lib/seo'

const seo = {
	title: `Om oss – din lokale partner i Bergen`,
	description:
		'Lær mer om Plenklipperen og våre tjenester innen hagearbeid og vintervedlikehold i Bergen. Lokal, pålitelig og profesjonell. Plenklipperen - Vi klipper plen!',
	path: '/om-oss',
}

export const metadata: Metadata = pageMetadata(seo)

const page = () => {
	return (
		<>
			<Hero />

			<section className=''>
				<div className='section-wrapper w-full flex justify-center'>
					<p className='!text-2xl md:!text-3xl lg:!text-4xl !font-bold text-center sm:w-2/3 leading-12'>
						Vi har erfaring med oppdrag for private boliger,
						borettslag og bedrifter. For oss er god kommunikasjon og
						tydelige avtaler viktig, slik at kundene vet hva de kan
						forvente.{' '}
						<span className='text-darkGray'>
							Vi møter opp som avtalt, gjør jobben ordentlig og
							sørger for et resultat du kan være fornøyd med.
						</span>
					</p>
				</div>
			</section>

			<span className='divider'></span>

			<Vaktmaster />

			<span className='divider'></span>

			<References />
		</>
	)
}

export default page
