import Hero from '../components/Sections/About/Hero'
import { QuoteOpen } from '@gravity-ui/icons'

const page = () => {
	return (
		<>
			<Hero />

			<span className='divider'></span>

			<section>
				<div className='section-wrapper'>
					<h2>
						What they{' '}
						<span className='text-darkGray'>say about us</span>
					</h2>

					<div className='mt-10 grid aspect-square lg:aspect-video grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 md:gap-8'>
						<div className='relative bg-lightGray p-8 rounded-2xl w-full h-full row-span-1 col-span-1 shadow-2xs '>
							<QuoteOpen
								className='absolute right-4 top-4 text-lightGrayAccent/60'
								width={70}
								height={70}
							/>

							<h3 className='relative'>Name Surname</h3>

							<p className='pt-4 italic realative'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Odit at repudiandae doloribus
								distinctio odio officia, molestias explicabo
								cupiditate asperiores dolores sed dolorum
								facilis alias ut molestiae deleniti reiciendis
								perferendis cumque.
							</p>
						</div>

						<div className='bg-lightGray p-8 rounded-2xl w-full h-full row-span-2 col-span-1 shadow-2xs '>
							<h3>Name Surname</h3>

							<p className='pt-4 italic'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Odit at repudiandae doloribus
								distinctio odio officia, molestias explicabo
								cupiditate asperiores dolores sed dolorum
								facilis alias ut molestiae deleniti reiciendis
								perferendis cumque.
							</p>
						</div>

						<div className='bg-lightGray p-8 rounded-2xl w-full h-full row-span-1 col-span-1 shadow-2xs '>
							<h3>Name Surname</h3>

							<p className='pt-4 italic'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Odit at repudiandae doloribus
								distinctio odio officia, molestias explicabo
								cupiditate asperiores dolores sed dolorum
								facilis alias ut molestiae deleniti reiciendis
								perferendis cumque.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default page
