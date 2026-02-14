import References from './components/Layout/Footer/References'
import Hero from './components/Sections/Mainpage/Hero'
import OurWork from './components/Sections/Mainpage/OurWork/OurWork'

import Services from './components/Sections/Mainpage/Services/Services'
import SideImageBlock from './components/UI/SideImageBlock'

export default function Home() {
	return (
		<>
			<Hero />
			<OurWork />
			<span className='divider'></span>
			<Services />
			<span className='divider'></span>
			<section>
				<div className='section-wrapper flex flex-col gap-12 md:gap-24'>
					<SideImageBlock
						texts={[
							'Vi tilbyr profesjonelle sommertjenester i Bergen for private boliger, borettslag og næringseiendommer. Vårt fokus er å levere pålitelig hagearbeid og vedlikehold som holder uteområdene dine velstelte, funksjonelle og representative gjennom hele sesongen.',
							'Enten du trenger regelmessig gressklipping i Bergen, komplett hagevedlikehold eller trygg trefelling, tilpasser vi løsningene etter eiendommens behov. Med lokalkunnskap og effektiv gjennomføring sørger vi for at hagen og uteområdet ditt holder høy standard hele sommeren.',
						]}
						title='Sommer­tjenester'
						image='/images/kvitko.jpg'
						list={[
							'Gressklipping i Bergen',
							'Kantklipp og plenvedlikehold',
							'Komplett hagevedlikehold',
							'Beskjæring av hekker og busker',
							'Høytrykksspyling av terrasser og uteområder',
							'Rydding av tomt og bortkjøring av hageavfall',
						]}
						link='/tjenester'
					/>
					<SideImageBlock
						reversed
						texts={[
							'Vi tilbyr pålitelig snørydding og vintervedlikehold i Bergen og omegn, inkludert boligområder og næringseiendommer. Når vinteren kommer, er det viktig med rask og effektiv brøyting for å sikre trygge uteområder.',
							'Vi hjelper både privatkunder, borettslag og bedrifter med snømåking, strøing og forebyggende vintervedlikehold gjennom hele sesongen.',
						]}
						title='Vintertjenester'
						image='/images/vinterford.jpg'
						list={[
							'Snørydding av gårdsplasser og parkeringsområder',
							'Brøyting for borettslag og bedrifter',
							'Strøing for økt sikkerhet',
							'Sesongbaserte avtaler',
							'Rask respons ved snøfall',
						]}
						link='/vintertjenester'
					/>
				</div>
			</section>
			<References />
		</>
	)
}
