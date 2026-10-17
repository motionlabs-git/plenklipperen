import { Metadata } from 'next'
import Link from 'next/link'
import PageHeadingSection from '../components/UI/PageHeadingSection'
import ContactUs from '../components/Sections/Contact/ContactUs'
import { CityParts } from '../contstants/CityPartsData'
import { pageMetadata } from '../lib/seo'

const seo = {
	title: 'Områder vi dekker i Bergen',
	description:
		'Vi tilbyr gressklipping, hagevedlikehold og snørydding i store deler av Bergen: Fana, Ytrebygda, Åsane, Fyllingsdalen, Laksevåg, Årstad og Bergen sentrum.',
	path: '/omrader',
}

export const metadata: Metadata = pageMetadata(seo)

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/grass4.jpg'}
				title={seo.title}
				paragraph={seo.description}
				breadcrumbs={[{ name: 'Områder', path: seo.path }]}
			/>

			<section>
				<div className='section-wrapper'>
					<h2>
						Hagearbeid og snørydding{' '}
						<span className='text-darkGray'>der du bor</span>
					</h2>

					<p className='mt-4 md:mt-8 md:w-2/3'>
						Vi har base på Sandsli og jobber for private,
						borettslag og bedrifter i bydelene under. Finner du
						ikke området ditt, eller er du usikker på om vi dekker
						adressen din? Ta kontakt, så finner vi ut av det.
					</p>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
						{CityParts.map((area) => (
							<Link
								key={area.link}
								href={area.link}
								className='flex flex-col bg-lightGray hover:bg-lightGrayAccent duration-200 rounded-2xl p-6 md:p-8'
							>
								<h3>{area.name}</h3>
								<p className='mt-2'>{area.summary}</p>
								<p className='mt-4 !text-sm text-darkGray'>
									{area.neighborhoods.join(' · ')}
								</p>
								<span className='mt-6 font-semibold text-primary'>
									{area.seo.title} →
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			<span className='divider'></span>

			<ContactUs />
		</>
	)
}

export default page
