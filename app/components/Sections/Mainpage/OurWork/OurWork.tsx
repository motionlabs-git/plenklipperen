import React from 'react'
import ImageBox from './ImageBox'

const OurWork = () => {
	return (
		<section>
			<div className='section-wrapper'>
				<div className='w-full flex justify-center'>
					<h2 className='text-center sm:w-2/3 leading-12'>
						Våre prosjekter i Bergen.{' '}
						<span className='text-darkGray'>
							Eksempler på gressklipping, hagevedlikehold,
							trefelling og vinterservice i Bergen. Pålitelig
							arbeid med synlige resultater og langvarig omsorg
							for eiendommen din.
						</span>
					</h2>
				</div>

				<div className='flex flex-col sm:grid sm:grid-cols-7 sm:grid-rows-2 gap-4 md:gap-8 mt-24 aspect-video'>
					<ImageBox
						img={'/images/stripes.jpg'}
						text={'lorem ipsum dolor sit amet'}
						className='aspect-square sm:aspect-auto row-span-2 col-span-3'
					/>

					<ImageBox
						img={'/images/nordas.jpg'}
						text={'lorem ipsum dolor sit amet'}
						className='aspect-square sm:aspect-auto row-span-1 col-span-4'
					/>

					<ImageBox
						img={'/images/fords.jpg'}
						text={'lorem ipsum dolor sit amet'}
						className='aspect-square sm:aspect-auto row-span-1 col-span-2'
					/>

					<ImageBox
						img={'/images/stripes.jpg'}
						text={'lorem ipsum dolor sit amet'}
						className='aspect-square sm:aspect-auto row-span-1 col-span-2'
					/>
				</div>
			</div>
		</section>
	)
}

export default OurWork
