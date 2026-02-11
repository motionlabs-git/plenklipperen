import Image from 'next/image'
import ContactBlocks from '../../../components/Sections/Contact/ContactBlocks'

const Hero = () => {
	return (
		<section className='relative text-white min-h-[85vh] flex items-end'>
			<Image
				src={'/images/nordas.jpg'}
				alt={''}
				width={2000}
				height={1200}
				className='absolute inset-0 w-full h-full object-cover'
			/>
			<div className='absolute inset-0 w-full h-full bg-black/30'></div>

			<div className='section-wrapper relative text-center flex flex-col items-center pt-12'>
				<h1 className='sm:max-w-4/5'>
					La oss knytte kontakter og bygge en bærekraftig fremtid
					sammen
				</h1>
				<p className='mt-8 text-lg sm:max-w-4/5'>
					Empowering farmers with innovative, eco-friendly practices
					to meet rising global food demands, conserve natural
					resources, strengthen communities, and protect our planet’s
					sustainable future.
				</p>

				<ContactBlocks />
			</div>
		</section>
	)
}

export default Hero
