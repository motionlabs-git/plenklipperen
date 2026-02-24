import Image from 'next/image'
import GreenButton from '../../UI/GreenButton'

const Vaktmaster = () => {
	return (
		<section>
			<div className='section-wrapper'>
				<h2 className=' sm:w-2/3 leading-12'>
					Trenger du også{' '}
					<span className='text-darkGray'>
						vedlikehold av bygg eller eiendom?
					</span>
				</h2>

				<div className='w-full flex flex-col md:flex-row gap-8 '>
					<div className='flex-1 lg:flex-2'>
						<p className='mt-4 md:mt-8'>
							I tillegg til vedlikehold av uteområder tilbyr vi
							også profesjonelle vaktmestertjenester gjennom vårt
							samarbeidende selskap. Mange kunder i Bergen har
							behov for både utvendig vedlikehold av grøntområder
							og teknisk oppfølging av bygg, og derfor kan vi
							hjelpe med en helhetlig løsning.
						</p>

						<p className='mt-4 md:mt-8'>
							Enten det gjelder renhold av fellesområder, mindre
							reparasjoner, tilsyn av eiendom eller sesongbasert
							vedlikehold, sørger vi for at eiendommen din
							fungerer optimalt hele året. Du får én pålitelig
							leverandør som kan håndtere flere behov.
						</p>

						<GreenButton
							className='mt-8 pl-6 py-2 font-semibold'
							text='Se våre vaktmestertjenester'
							link={'https://www.vaktmesterbergen.no/'}
							blank
						/>
					</div>

					<div className='md:flex-1 rounded-2xl overflow-hidden'>
						<Image
							src={'/images/vaktmester_house_cleaning.jpeg'}
							alt={'Plenklipperen image'}
							width={800}
							height={800}
							className='aspect-9/10 object-cover rounded-2xl'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Vaktmaster
