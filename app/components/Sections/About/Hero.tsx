import GreenButton from '../../../components/UI/GreenButton'
import Image from 'next/image'

const Hero = () => {
	return (
		<section className='relative'>
			<div className='relative section-wrapper pt-50'>
				<div className='flex flex-col md:flex-row md:items-end gap-4 md:gap-12'>
					<div>
						<h1>
							Om{' '}
							<span className='text-darkGray'>
								Plenklipperen.no
							</span>
						</h1>
					</div>

					<div>
						<p className='flex-1 !text-lg'>
							Vi er et lokalt firma i Bergen som tilbyr tjenester
							innen hagearbeid, vedlikehold av uteområder og
							vinterservice. Målet vårt er å levere solid arbeid,
							være pålitelige og skape gode relasjoner med kundene
							våre over tid. Vi tilpasser oppdragene etter behov
							og legger vekt på løsninger som fungerer godt i
							praksis.
						</p>
						<GreenButton
							link='/tjenester'
							className='mt-4 text-base sm:text-lg pl-6 font-semibold'
							text={'Gå til tjenester'}
						/>
					</div>
				</div>

				<div className='w-full flex justify-center mt-24'>
					<div className='w-full md:w-2/3 rounded-2xl overflow-hidden aspect-video bg-gray-100'>
						<Image
							src={'/images/guys.jpg'}
							alt={'Om oss bilder - Plenklipperen Bergen'}
							width={2000}
							height={1000}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
