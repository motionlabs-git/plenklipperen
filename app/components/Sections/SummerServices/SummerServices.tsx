import SideImageBlock from '../../UI/SideImageBlock'

const SummerServices = () => {
	return (
		<section>
			<div className='section-wrapper flex flex-col gap-12 md:gap-24'>
				<SideImageBlock
					title={'Plenhold'}
					id='plenhold'
					texts={[
						'Vi tilbyr profesjonelt hagevedlikehold i Bergen og nærliggende områder som Fana, Åsane, Ytrebygda og Laksevåg. Enten det gjelder privatboliger, borettslag eller næringseiendommer, sørger vi for at uteområdene dine holder høy standard gjennom hele sesongen.',
						'Med riktig klippeteknikk og jevnlig vedlikehold holder plenen seg tett, sunn og representativ gjennom hele sesongen. Vi tilpasser frekvens og omfang etter behovene til din eiendom i Bergen.',
					]}
					image={'/images/stripes.jpg'}
					list={[
						'Regelmessig og engangs plenklipp',
						'Kantklipp og detaljarbeid',
						'Opprydding av gress etter klipping',
						'Mulighet for bortkjøring av hageavfall',
						'Tjenester for private og kommersielle kunder',
					]}
				/>

				<SideImageBlock
					title={'Hagevedlikehold'}
					id='hagevedlikehold'
					texts={[
						'Vi tilbyr komplett hagevedlikehold i Bergen og nærliggende områder som Fana, Åsane og Laksevåg. Vi hjelper kunder med å holde hager sunne, ryddige og estetisk velstelte gjennom hele sesongen.',
						'Vi utfører luking, planting, beskjæring av hekker og sesongbasert arbeid. Hver oppgave tilpasses hagens behov og de klimatiske forholdene i Bergen.',
					]}
					image={'/images/plenklipperen_busker1.jpg'}
					list={[
						'Luking og stell av blomsterbed',
						'Planting og justering av beplantning',
						'Beskjæring av hekker',
						'Bortkjøring av løv og hageavfall',
						'Regelmessig og sesongbasert vedlikehold',
					]}
					reversed
				/>
				<SideImageBlock
					title={'Trefelling'}
					id='trefelling'
					texts={[
						'Vi utfører trygg og profesjonell trefelling i Bergen og bydeler som Fana, Åsane og Laksevåg. Vi legger stor vekt på sikkerhet for mennesker, bygninger og omkringliggende eiendom.',
						'Tjenesten inkluderer også oppkapping av trevirke, fjerning av greiner og full opprydding etter arbeidet. Vi hjelper deg med å håndtere farlige, skadede eller overgrodde trær raskt og effektivt i Bergen.',
					]}
					image={'/images/tree 2.jpg'}
					list={[
						'Sikker trefelling',
						'Seksjonsfelling ved begrenset plass',
						'Oppkapping og kløyving av ved',
						'Opprydding av greiner og avfall',
						'Profesjonelt utstyr og erfarent team',
					]}
				/>
				<SideImageBlock
					reversed
					title={'Reparasjoner og justeringer'}
					texts={[
						'Vi tilbyr mindre reparasjoner og vedlikeholdsarbeid i Bergen, inkludert områder som Fana, Åsane og andre nærliggende bydeler. Vi hjelper kunder med å holde eiendommer i god stand gjennom hele året.',
						'Vi utfører maling, opprydding av uteområder, mindre bygningsmessige tilpasninger samt høytrykksspyling av terrasser, fasader og andre overflater. Vi er fleksible og kan raskt tilpasse oss behovene til både private og bedriftskunder i Bergen.',
					]}
					image={'/images/okap.jpg'}
					list={[
						'Maling og mindre reparasjoner',
						'Rydding av tomt og uteområder',
						'Høytrykksspyling av terrasser og uteområder',
						'Vask av fasader, stein og belegningsstein',
						'Klargjøring før sesong',
						'Engangsoppdrag og faste avtaler',
						'Pålitelig og rask service',
					]}
				/>
			</div>
		</section>
	)
}

export default SummerServices
