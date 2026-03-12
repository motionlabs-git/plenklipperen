import { Metadata } from 'next'
import PageHeadingSection from '../../components/UI/PageHeadingSection'
import { GiTreeBranch } from 'react-icons/gi'
import { IoMdFlower } from 'react-icons/io'
import { GiRake } from 'react-icons/gi'
import { GiGrass } from 'react-icons/gi'
import { GiGardeningShears } from 'react-icons/gi'
import ContactUs from '@/app/components/Sections/Contact/ContactUs'
import IconGridSection from '@/app/components/UI/IconGridSection'
import SideImageBlock from '@/app/components/UI/SideImageBlock'
import SmallGallerySection from '@/app/components/UI/SmallGallerySection'

export const metadata: Metadata = {
	title: `Hagevedlikehold`,
	description:
		'Hagevedlikehold i Bergen for private og bedrifter. Vi hjelper med beskjæring, opprydding av hager og generell vedlikehold av uteområder gjennom hele sesongen.',
}

const servicesGrid = [
	{
		icon: <GiTreeBranch />,
		title: 'Beskjæring av busker og hekker',
		subTitle: 'Forming og vedlikehold av busker og hekker.',
	},
	{
		icon: <GiRake />,
		title: 'Rydding av hage',
		subTitle: 'Fjerning av løv, greiner og hageavfall.',
	},
	{
		icon: <IoMdFlower />,
		title: 'Vedlikehold av blomsterbed',
		subTitle: 'Stell og opprydding av blomsterbed og planteområder.',
	},
	{
		icon: <GiGrass />,
		title: 'Sesongarbeid i hagen',
		subTitle: 'Klargjøring av hagen før vår og vinter.',
	},
	{
		icon: <GiGardeningShears />,
		title: 'Generelt hagearbeid',
		subTitle: 'Praktisk hjelp med ulike oppgaver i hagen.',
	},
]

const gallery = [
	{
		title: 'Profesjonell beskjæring av busker',
		img: '/images/bushes3.jpg',
	},
	{
		title: 'Vedlikehold av busker i byområder',
		img: '/images/bushes-citycentre.jpg',
	},
	{
		title: 'Formklipping og stell av hagebusker',
		img: '/images/bushes5.jpg',
	},
]

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/plenklipperen_busker1.jpg'}
				title={'Hagevedlikehold'}
				paragraph={
					'Hagevedlikehold i Bergen for private og bedrifter. Vi hjelper med beskjæring, opprydding av hager og generell vedlikehold av uteområder gjennom hele sesongen.'
				}
			/>

			<IconGridSection
				title={'Våre tjenester'}
				grid={servicesGrid}
				link={'/tjenester/hagevedlikehold#kontakt-oss'}
				linkText='Kontakt oss'
			/>

			<span className='divider'></span>

			<section>
				<div className='section-wrapper'>
					<SideImageBlock
						title='Slik jobber'
						grayTitle='vi'
						texts={[
							'Vi tilbyr profesjonelt plenhold i Bergen og nærliggende områder. Regelmessig vedlikehold av plen er viktig for at uteområder skal se ryddige og innbydende ut gjennom hele sesongen. Vi hjelper både private boligeiere, borettslag og bedrifter med å holde plenen i god stand.',
							'Våre tjenester inkluderer beskjæring av busker og hekker, opprydding av uteområder og stell av blomsterbed. Vi hjelper både med enkeltoppdrag og faste vedlikeholdsavtaler.',
							'Enten det gjelder en privat hage eller et større uteområde, sørger vi for profesjonelt arbeid og et resultat du kan være fornøyd med.',
						]}
						image={'/images/bushes4.jpg'}
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
