import Image from 'next/image'
import GreenButton from '../../UI/GreenButton'
import ContactForm from '../Contact/Form/ContactForm'

const Hero = () => {
	return (
		<section className='relative min-h-screen h-fit'>
			<div className='absolute inset-0 w-full h-full select-none'>
				<div className='absolute inset-0 bg-black/30'></div>

				<Image
					src='/images/Hero_image.jpg'
					alt='Plenklipperen Hero image'
					width={3000}
					height={3000}
					className='w-full h-full object-cover'
				></Image>
			</div>

			<div className='section-wrapper pt-14 relative text-white flex-col lg:flex-row flex gap-10 items-end'>
				<div className='flex-1'>
					<h1>Hagevedlikehold og snørydding i Bergen</h1>
					<p className='mt-6 !text-lg'>
						Vi tilbyr profesjonell gressklipp, hagevedlikehold,
						trefelling og snørydding for private og bedrifter i
						Bergen. Rask respons og pålitelig service hele året.
					</p>

					<GreenButton
						link='/tjenester'
						className='mt-4 text-base sm:text-lg pl-6 font-semibold'
						text={'Gå til tjenester'}
					/>
				</div>

				<div className='flex-1 w-full flex gap-4 h-full items-end'>
					<div className='bg-white/30 w-full rounded-2xl'>
						<div className='rounded-2xl blureBox  text-black'>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
