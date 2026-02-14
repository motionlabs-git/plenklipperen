import ReferenceCard from './ReferenceCard'

const References = () => {
	return (
		<section>
			<div className='section-wrapper'>
				<h2>
					Hva de sier <span className='text-darkGray'>om oss</span>
				</h2>

				<div className='mt-10 grid aspect-square lg:aspect-video grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 md:gap-8'>
					<ReferenceCard
						title={'Bergen Snøbrøyting'}
						text={
							'Har flere eiendommer! Det er viktig at de er velholdt. Plenklipperen.no gjør det enkelt for meg.'
						}
						className={'row-span-1 col-span-1'}
					/>

					<ReferenceCard
						title={'Noen av våre kunder'}
						text={
							'Norlandiacare Barnehager, Traudalen Borettslag, Borettslaget Kristian Jansonsvei,Drottningsvik Borettslag, Håvardstun Sameiet, Ulsmåg Borettslag, Scanauto Kokstad, Søvikneset Sameiet, Sameiet Fæster Brygge Kjøkkelvik, Sameiet Søreidet Terasse'
						}
						className={'row-span-2 col-span-1'}
					/>

					<ReferenceCard
						title={'Snøbrøyting Bergen'}
						text={
							'Mine foreldre er ikke ungdom lengre, du gjør en fantastisk jobb!'
						}
						className={'row-span-1 col-span-1 '}
					/>
				</div>
			</div>
		</section>
	)
}

export default References
