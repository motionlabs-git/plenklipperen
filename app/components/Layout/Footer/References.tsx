import Image from 'next/image'

const References = () => {
	return (
		<section className='relative min-h-screen'>
			<div className='w-full h-full absolute inset-0'>
				<div className='absolute inset-0 bg-linear-to-t from-transparent to-white from-80%'></div>
				<Image
					src={'/images/Hero_image.jpg'}
					alt={'References image'}
					width={2000}
					height={2000}
					className='w-full h-full object-cover'
				/>
			</div>

			<div className='section-wrapper relative text-white'>
				<h1>References</h1>
				oasdjflkasdj asldkjf lasdjfl kasdjlfjasl Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Non obcaecati dolor cumque
				veritatis labore quibusdam, sequi atque molestiae aspernatur
				voluptates et quaerat rem aut magnam fuga alias odio iusto ex.
			</div>
		</section>
	)
}

export default References
