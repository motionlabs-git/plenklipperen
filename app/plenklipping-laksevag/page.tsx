import { Metadata } from 'next'
import PageHeadingSection from '../components/UI/PageHeadingSection'
import IconGridSection from '../components/UI/IconGridSection'
import ContactUs from '../components/Sections/Contact/ContactUs'
import FAQ from '../components/UI/FAQ/FAQ'
import { CityPartData } from '../contstants/CityPartsData'

const { laksevag: data } = CityPartData

export const metadata: Metadata = {
	title: data.seo.title,
	description: data.seo.description,
}

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={data.seo.image}
				title={data.seo.title}
				paragraph={data.seo.description}
			/>

			<IconGridSection
				title={data.content.iconsGrid.title}
				grayTitle={data.content.iconsGrid.grayTitle}
				grid={data.content.iconsGrid.grid}
				link={'/tjenester'}
				linkText='Gå til tjenester'
			/>

			<span className='divider'></span>

			<FAQ
				subtitle={
					'Lurer du på noe? Her finner du svar på de vanligste spørsmålene.'
				}
				qaa={data.content.faq.data}
			/>
			<span className='divider'></span>
			<ContactUs />

			<section className='!py-0'>
				<div className='section-wrapper'>
					<div className='rounded-2xl overflow-hidden'>
						<iframe
							width='100%'
							height='650px'
							src={data.map}
							allowFullScreen
						></iframe>
					</div>
				</div>
			</section>
		</>
	)
}

export default page
