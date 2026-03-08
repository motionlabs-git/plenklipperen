import { Metadata } from 'next'
import PageHeadingSection from '../../components/UI/PageHeadingSection'
import ContactUs from '@/app/components/Sections/Contact/ContactUs'
import { AlertCircle } from 'feather-icons-react'
import IconGridSection from '@/app/components/UI/IconGridSection'
import { RiTreeFill } from 'react-icons/ri'
import { GiLightningBranches } from 'react-icons/gi'
import { FaTrailer } from 'react-icons/fa'
import { FaTreeCity } from 'react-icons/fa6'
import { GiGardeningShears } from 'react-icons/gi'
import SideImageBlock from '@/app/components/UI/SideImageBlock'
import SmallGallerySection from '@/app/components/UI/SmallGallerySection'

export const metadata: Metadata = {
	title: `Trefelling`,
	description:
		'Trygg og effektiv trefelling i Bergen. Vi feller trær, fjerner greiner og rydder området etter arbeidet for private eiendommer og uteområder.',
}

const servicesGrid = [
	{
		icon: <RiTreeFill />,
		title: 'Felling av trær',
		subTitle: 'Sikker felling av trær i hager og på eiendommer.',
	},
	{
		icon: <FaTreeCity />,
		title: 'Seksjonsfelling',
		subTitle: 'Kontrollert felling av trær på trange områder.',
	},
	{
		icon: <GiLightningBranches />,
		title: 'Fjerning av greiner',
		subTitle: 'Beskjæring og fjerning av store greiner.',
	},
	{
		icon: <FaTrailer />,
		title: 'Opprydding etter trefelling',
		subTitle: 'Fjerning av kvist og opprydding av området.',
	},
	{
		icon: <GiGardeningShears />,
		title: 'Vedlikehold av trær',
		subTitle: 'Beskjæring for sunn vekst og sikkerhet.',
	},
]

const gallery = [
	{
		title: 'title1',
		img: '/images/bushes5.jpg',
	},
	{
		title: 'title1',
		img: '/images/bushes5.jpg',
	},
	{
		title: 'title1',
		img: '/images/bushes5.jpg',
	},
]

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/trefelling.jpg'}
				title={'Trefelling'}
				paragraph={
					'Trygg og effektiv trefelling i Bergen. Vi feller trær, fjerner greiner og rydder området etter arbeidet for private eiendommer og uteområder.'
				}
			/>

			<IconGridSection
				title={'Naše služby'}
				grid={servicesGrid}
				link={'/tjenester/trefelling#kontakt-oss'}
				linkText='Kontakt oss'
			/>

			<span className='divider'></span>

			<section>
				<div className='section-wrapper'>
					<SideImageBlock
						title='Slik jobber'
						grayTitle='vi'
						texts={[
							'Vi tilbyr profesjonell trefelling i Bergen for private kunder, borettslag og bedrifter. Felling av trær kan være nødvendig når trær blir for store, skadet av vær eller står for nær bygninger.',
							'Arbeidet utføres på en trygg og kontrollert måte, også i områder med begrenset plass. Vi kan felle trær i seksjoner og sørger for at arbeidet gjennomføres effektivt og sikkert.',
							'Etter trefelling rydder vi opp området slik at eiendommen fremstår ren og ryddig.',
						]}
						image={'/images/stripes.jpg'}
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
