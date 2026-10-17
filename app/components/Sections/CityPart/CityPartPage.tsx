import Link from 'next/link'
import PageHeadingSection from '../../UI/PageHeadingSection'
import IconGridSection from '../../UI/IconGridSection'
import SmallGallerySection from '../../UI/SmallGallerySection'
import GridCell from '../../UI/GridCell'
import FAQ from '../../UI/FAQ/FAQ'
import ContactUs from '../Contact/ContactUs'
import {
	CityPart,
	CityPartServices,
	CityParts,
} from '@/app/contstants/CityPartsData'
import { pageMetadata } from '@/app/lib/seo'

export const cityPartMetadata = (area: CityPart) =>
	pageMetadata({ ...area.seo, path: area.link })

const CityPartPage = ({ area }: { area: CityPart }) => {
	const otherAreas = CityParts.filter((item) => item.link !== area.link)

	return (
		<>
			<PageHeadingSection
				image={area.seo.image}
				title={area.seo.title}
				paragraph={area.seo.description}
				breadcrumbs={[
					{ name: 'Områder', path: '/omrader' },
					{ name: area.name, path: area.link },
				]}
			/>

			<section>
				<div className='section-wrapper flex flex-col md:flex-row gap-8 md:gap-16'>
					<div className='md:flex-3'>
						<h2>
							Lokal hjelp i{' '}
							<span className='text-darkGray'>{area.name}</span>
						</h2>

						{area.intro.map((text, i) => (
							<p key={i} className='mt-4 md:mt-8'>
								{text}
							</p>
						))}
					</div>

					<div className='md:flex-2 bg-lightGray rounded-2xl p-6 md:p-8 h-fit'>
						<h3>Vi jobber blant annet i</h3>
						<ul className='mt-4 flex flex-wrap gap-2'>
							{area.neighborhoods.map((item) => (
								<li
									key={item}
									className='bg-white rounded-full px-4 py-1 font-medium'
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className='!pt-0'>
				<div className='section-wrapper'>
					<h2>
						Typiske oppdrag i{' '}
						<span className='text-darkGray'>{area.name}</span>
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
						{area.highlights.map((item) => (
							<GridCell
								key={item.title}
								title={item.title}
								subtitle={item.subTitle}
							/>
						))}
					</div>
				</div>
			</section>

			<span className='divider'></span>

			<IconGridSection
				title='Tjenester i'
				grayTitle={area.name}
				grid={CityPartServices}
				link={'/tjenester'}
				linkText='Gå til tjenester'
			/>

			{area.projects && area.projects.length > 0 && (
				<SmallGallerySection images={area.projects} />
			)}

			<span className='divider'></span>

			<FAQ
				subtitle={`Vanlige spørsmål om hagearbeid og plenklipping i ${area.name}.`}
				qaa={area.faq}
			/>

			<section className='!pt-0'>
				<div className='section-wrapper'>
					<h3>Vi jobber også i</h3>
					<ul className='mt-4 flex flex-wrap gap-2'>
						{otherAreas.map((item) => (
							<li key={item.link}>
								<Link
									href={item.link}
									className='block bg-lightGray hover:bg-lightGrayAccent duration-200 rounded-full px-4 py-1 font-medium'
								>
									{item.seo.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>

			<span className='divider'></span>

			<ContactUs />

			<section className='!py-0'>
				<div className='section-wrapper'>
					<div className='rounded-2xl overflow-hidden'>
						<iframe
							width='100%'
							height='450px'
							src={`https://maps.google.com/maps?hl=no&q=${encodeURIComponent(area.mapQuery)}&z=13&output=embed`}
							title={`Kart over ${area.name}`}
							loading='lazy'
							allowFullScreen
						></iframe>
					</div>
				</div>
			</section>
		</>
	)
}

export default CityPartPage
