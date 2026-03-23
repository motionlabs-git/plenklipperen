import { Metadata } from 'next'
import PageHeadingSection from '../../components/UI/PageHeadingSection'
import ContactUs from '@/app/components/Sections/Contact/ContactUs'
import IconGridSection from '@/app/components/UI/IconGridSection'
import { RiPaintBrushFill } from 'react-icons/ri'
import { FaHandHoldingWater } from 'react-icons/fa'
import { TfiBrush } from 'react-icons/tfi'
import { GiDrill } from 'react-icons/gi'
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2'
import SideImageBlock from '@/app/components/UI/SideImageBlock'
import SmallGallerySection from '@/app/components/UI/SmallGallerySection'

export const metadata: Metadata = {
	title: `Reparasjoner og justeringer`,
	description:
		'Mindre reparasjoner og vedlikeholdsarbeid i Bergen. Vi hjelper med praktiske oppgaver, justeringer og vedlikehold av eiendommer både inne og ute.',
}

const servicesGrid = [
	{
		icon: <RiPaintBrushFill />,
		title: 'Maling og små reparasjoner',
		subTitle: 'Oppfriskning av overflater og mindre vedlikeholdsarbeid.',
	},
	{
		icon: <FaHandHoldingWater />,
		title: 'Høytrykksspyling',
		subTitle: 'Vask av terrasser, fasader og uteområder.',
	},
	{
		icon: <TfiBrush />,
		title: 'Rydding av uteområder',
		subTitle: 'Fjerning av avfall og klargjøring av eiendom.',
	},
	{
		icon: <GiDrill />,
		title: 'Vedlikehold av eiendom',
		subTitle: 'Praktiske oppgaver og mindre forbedringer.',
	},
	{
		icon: <HiMiniWrenchScrewdriver />,
		title: 'Små justeringer',
		subTitle: 'Montering og justering av ulike elementer.',
	},
]

const gallery = [
	{
		title: 'Reparasjon og vedlikehold av uteområder',
		img: '/images/repair1.jpeg',
	},
	{
		title: 'Små reparasjonsarbeider på eiendom',
		img: '/images/repair2.jpeg',
	},
	{
		title: 'Reparasjon av asfalt og gårdsplasser',
		img: '/images/asphalt.jpeg',
	},
]	
const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/repairs.jpg'}
				title={'Reparasjoner og justeringer'}
				paragraph={
					'Mindre reparasjoner og vedlikeholdsarbeid i Bergen. Vi hjelper med praktiske oppgaver, justeringer og vedlikehold av eiendommer både inne og ute.'
				}
			/>

			<IconGridSection
				title={'Våre tjenester'}
				grid={servicesGrid}
				link={'/tjenester/reparasjoner-og-justeringer#kontakt-oss'}
				linkText='Kontakt oss'
			/>

			<span className='divider'></span>

			<section>
				<div className='section-wrapper'>
					<SideImageBlock
						title='Slik jobber'
						grayTitle='vi'
						texts={[
							'Vi tilbyr mindre reparasjoner og praktisk vedlikeholdsarbeid i Bergen for både private eiendommer og bedrifter. Mange små oppgaver kan være tidkrevende å gjøre selv, og vi hjelper gjerne med å få dem gjort raskt og effektivt.',
							'Tjenestene inkluderer maling, høytrykksspyling av terrasser og fasader samt ulike små reparasjoner og justeringer på eiendommer. Vi kan også hjelpe med rydding og klargjøring av uteområder.',
							'Med fleksible løsninger kan vi utføre både enkeltoppdrag og regelmessig vedlikehold etter behov.',
						]}
						image={'/images/okap.jpg'}
					/>
				</div>
			</section>

			<SmallGallerySection images={gallery} />

			<span className='divider'></span>

			<ContactUs />
		</>
	)
}

export default page
