import SideImageBlock from '../../UI/SideImageBlock'

const WinterServices = () => {
	return (
		<section>
			<div className='section-wrapper flex flex-col gap-12 md:gap-24'>
				<SideImageBlock
					title={'Snørydding i Bergen'}
					texts={[
						'Vi tilbyr profesjonell snørydding i Bergen for både private boliger, borettslag og næringseiendommer. Vi sørger for rask og effektiv fjerning av snø fra gårdsplasser, parkeringsområder, inngangspartier og fellesarealer.',
						'Med krevende og skiftende vinterforhold i Bergen er det viktig med pålitelig brøyting og manuell snømåking ved behov. Vi følger værforholdene nøye og rykker raskt ut for å sikre trygge og fremkommelige uteområder gjennom hele vintersesongen.',
					]}
					image={'/images/vinter4.jpg'}
					list={[
						'Snørydding av gårdsplasser og innkjørsler',
						'Brøyting av parkeringsplasser og større områder',
						'Fast vinteravtale eller utrykning ved behov',
						'Tjenester for private boliger, borettslag og bedrifter',
					]}
				/>

				<SideImageBlock
					title={'Strøing og salting i Bergen'}
					texts={[
						'Vi tilbyr profesjonell strøing og salting i Bergen for å redusere risikoen for glatte og farlige uteområder. Når temperaturene faller og is dannes, er rask og riktig behandling avgjørende for sikkerheten.',
						'Vi utfører strøing av gangveier, parkeringsplasser og inngangspartier med effektive og tilpassede løsninger. Våre tjenester for vintervedlikehold i Bergen bidrar til trygg ferdsel for beboere, ansatte og besøkende gjennom hele vinteren.',
					]}
					image={'/images/vinterr.jpg'}
					list={[
						'Salting av parkeringsplasser og kjøreområder',
						'Strøing av gangveier og inngangspartier',
						'Forebyggende tiltak ved varslet frost',
						'Sesongbaserte vinteravtaler',
						'Rask respons ved behov',
					]}
					reversed
				/>
			</div>
		</section>
	)
}

export default WinterServices
