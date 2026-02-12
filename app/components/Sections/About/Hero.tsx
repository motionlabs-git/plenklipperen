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
							Bare fyll ut det korte skjemaet, så vil teamet vårt
							raskt svare med den mest effektive og personlige
							løsningen som er skreddersydd for dine unike behov
							og mål.
						</p>
						<GreenButton
							link='/'
							className='mt-4 text-base sm:text-lg pl-6 font-semibold'
							text={'See services'}
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
