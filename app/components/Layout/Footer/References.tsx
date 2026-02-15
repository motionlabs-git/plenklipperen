import Link from 'next/link'
import ReferenceCard from './ReferenceCard'
import GreenButton from '../../UI/GreenButton'

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

				<div className='flex justify-center'>
					<GreenButton
						link='https://www.google.com/search?sa=X&sca_esv=9783dddf2c54e777&sxsrf=ANbL-n4kL8vMdpoxEBPilLMKWAjD-P_gKw:1771164136796&q=Plenklipperen+Recenze&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjQzN7cwMze0sDAwtTAxsDQ23sDI-IpRNCAnNS87J7OgILUoNU8hKDU5Na8qdRErdnEAEcGj7koAAAA&rldimm=3167786718805840933&tbm=lcl&hl=cs-CZ&ved=2ahUKEwjyrtnJ1NuSAxVPh_0HHahVPdgQ9fQKegQIQxAG&biw=2048&bih=983&dpr=1'
						blank
						className='mt-4 text-base sm:text-lg pl-6 font-semibold'
						text={'Send oss ​​en referanse'}
					/>
				</div>
			</div>
		</section>
	)
}

export default References
