import Image from 'next/image'
import ContactBlocks from '../../../components/Sections/Contact/ContactBlocks'

const Hero = () => {
	return (
		<section className='relative text-white min-h-[85vh] flex items-end'>
			<Image
				src={'/images/Hero_image.jpg'}
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
				<p className='mt-8 !text-lg sm:max-w-4/5'>
					Ta kontakt med oss – ring, send en e-post eller fyll ut
					kontaktskjemaet, så svarer vi raskt.
				</p>

				<ContactBlocks />
			</div>
		</section>
	)
}

export default Hero
