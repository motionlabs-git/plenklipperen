import ReferenceCard from './ReferenceCard'

const References = () => {
	return (
		<section>
			<div className='section-wrapper'>
				<h2>
					What they{' '}
					<span className='text-darkGray'>say about us</span>
				</h2>

				<div className='mt-10 grid aspect-square lg:aspect-video grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 md:gap-8'>
					<ReferenceCard
						title={'Name Surname'}
						text={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at repudiandae doloribus distinctio odioofficia, molestias explicabo cupiditate asperioresdolores sed dolorum facilis alias ut molestiaedeleniti reiciendis perferendis cumque.'
						}
						className={'row-span-1 col-span-1'}
					/>

					<ReferenceCard
						title={'Name Surname'}
						text={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at repudiandae doloribus distinctio odioofficia, molestias explicabo cupiditate asperioresdolores sed dolorum facilis alias ut molestiaedeleniti reiciendis perferendis cumque.'
						}
						className={'row-span-2 col-span-1'}
					/>

					<ReferenceCard
						title={'Name Surname'}
						text={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at repudiandae doloribus distinctio odioofficia, molestias explicabo cupiditate asperioresdolores sed dolorum facilis alias ut molestiaedeleniti reiciendis perferendis cumque.'
						}
						className={'row-span-1 col-span-1 '}
					/>
				</div>
			</div>
		</section>
	)
}

export default References
