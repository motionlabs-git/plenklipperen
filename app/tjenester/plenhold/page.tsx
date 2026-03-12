import { Metadata } from 'next'
import PageHeadingSection from '../../components/UI/PageHeadingSection'
import ContactUs from '@/app/components/Sections/Contact/ContactUs'
import { AlertCircle } from 'feather-icons-react'
import { MdOutlineAlignHorizontalCenter } from 'react-icons/md'
import { PiFlowerTulipLight } from 'react-icons/pi'
import { GiGrass } from 'react-icons/gi'
import { TbBuildingSkyscraper } from 'react-icons/tb'

import IconGridSection from '@/app/components/UI/IconGridSection'
import SmallGallerySection from '@/app/components/UI/SmallGallerySection'
import SideImageBlock from '@/app/components/UI/SideImageBlock'
import { GiHighGrass } from 'react-icons/gi'

export const metadata: Metadata = {
	title: `Plenhold`,
	description:
		'Profesjonelt plenhold i Bergen for private hager, borettslag og bedrifter. Vi sørger for regelmessig plenklipping, kantklipping og vedlikehold slik at uteområdene alltid ser velstelte ut.',
}

const servicesGrid = [
	{
		icon: <GiHighGrass />,
		title: 'Plenklipping',
		subTitle: 'Regelmessig klipping av plen for et jevnt og sunt resultat.',
	},
	{
		icon: <MdOutlineAlignHorizontalCenter />,
		title: 'Kantklipping',
		subTitle: 'Presis trimming rundt kanter, bed og gangstier.',
	},
	{
		icon: <PiFlowerTulipLight />,
		title: 'Fjerning av ugress',
		subTitle: 'Fjerner ugress som påvirker plenens utseende og helse.',
	},
	{
		icon: <GiGrass />,
		title: 'Sesongklargjøring av plen',
		subTitle:
			'Klargjøring av plenen etter vinter eller før sommersesongen.',
	},
	{
		icon: <TbBuildingSkyscraper />,
		title: 'Vedlikehold av fellesområder',
		subTitle: 'Plenhold for borettslag, sameier og næringseiendommer.',
	},
]

const gallery = [
	{
		title: 'Profesjonell plenklipping med hagetraktor',
		img: '/images/Gard_tractor.JPG',
	},
	{
		title: 'Effektiv klipping av store plenområder',
		img: '/images/tractor2.jpg',
	},
	{
		title: 'Nylig klippet og velstelt plen',
		img: '/images/grass6.jpg',
	},
]

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/stripes.jpg'}
				title={'Plenhold'}
				paragraph={
					'Profesjonelt plenhold i Bergen for private hager, borettslag og bedrifter. Vi sørger for regelmessig plenklipping, kantklipping og vedlikehold slik at uteområdene alltid ser velstelte ut.'
				}
			/>

			<IconGridSection
				title='Hva tjenesten'
				grayTitle='inkluderer'
				grid={servicesGrid}
				link={'/tjenester/plenhold#kontakt-oss'}
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
							'Våre tjenester inkluderer plenklipping, kantklipping og generelt vedlikehold av grøntområder. Vi tilpasser arbeidet etter behovet til hver eiendom, enten det gjelder en mindre privat hage eller større fellesområder.',
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
