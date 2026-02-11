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
					<h1>SNØ OG GRØNT VEDLIKEHOLD BERGEN</h1>
					<p className='mt-6 text-lg'>
						We empower farmers with sustainable practices, quality
						seeds, and modern technologies to cultivate abundant
						harvests, support comm
					</p>

					<GreenButton
						link='/'
						className='mt-4 text-lg pl-6 font-semibold'
						text={'See services'}
					/>
				</div>

				<div className='flex-1 w-full flex gap-4 h-full items-end'>
					<div className='bg-white/30 w-full rounded-2xl'>
						<div className='rounded-2xl blureBox  text-black'>
							<ContactForm />
						</div>
					</div>

					{/* <Link
						href={'/'}
						className='group relative blureBox flex items-center justify-center rounded-2xl aspect-4/5 w-full overflow-hidden '
					>
						<Image
							src={'/images/instagram.jpg'}
							alt={'Alt'}
							width={500}
							height={500}
							className='w-full h-full object-cover opacity-80 group-hover:opacity-100 duration-200'
						/>

						<div className='absolute right-2 bottom-2 flex gap-2 items-center blureBox rounded-full px-3 py-1 text-sm'>
							<CircleInfo />
							<span>See our instagram!</span>
						</div>
						<PlayButton className='absolute' />
					</Link>

					<div className='rounded-2xl aspect-4/5 w-full blureBox'>
						<ChevronRight className='absolute bottom-4 right-4 bg-black' />
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default Hero
