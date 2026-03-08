import { Metadata } from 'next'
import ContactUs from '../components/Sections/Contact/ContactUs'
import Hero from '../components/Sections/Contact/Hero'
import FAQ from '../components/UI/FAQ/FAQ'

export const metadata: Metadata = {
	title: `Kontakt oss | Hagearbeid i Bergen`,
	description:
		'Trenger du gressklipping, hagevedlikehold eller snørydding i Bergen? Kontakt oss i dag for et uforpliktende tilbud. Plenklipperen - Vi klipper plen!',
}

const qaa = [
	{
		q: 'Hvor ofte anbefaler dere gressklipp i Bergen?',
		a: 'Hvor ofte gressklipp i Bergen bør utføres avhenger av sesong, vær og type plen. Vanligvis anbefaler vi gressklipp hver 7–14 dag i sesongen for å holde plenen sunn, tett og pen.',
	},
	{
		q: 'Tilbyr dere gressklipp i hele Bergen, inkludert Fana, Åsane og Laksevåg?',
		a: 'Ja, vi tilbyr gressklipp i Bergen og bydeler som Fana, Åsane, Laksevåg, Arna, sentrum og nærliggende områder. Ta kontakt dersom du er usikker på om vi dekker ditt område.',
	},
	{
		q: 'Hvordan kan jeg bestille gressklipp i Bergen?',
		a: 'Det er enkelt å bestille gressklipp i Bergen — du kan ringe oss eller fylle ut kontaktskjemaet på nettsiden. Vi avtaler pris, omfang og tidspunkt sammen.',
	},
	{
		q: 'Tilbyr dere både engangs gressklipp og fast plenvedlikehold i Bergen?',
		a: 'Ja, vi tilbyr både engangs gressklipp i Bergen og faste avtaler for regelmessig plenklipp og vedlikehold gjennom hele sesongen.',
	},
	{
		q: 'Hva koster gressklipp i Bergen?',
		a: 'Prisen på gressklipp i Bergen avhenger av tomtens størrelse, gressets høyde, tilgjengelighet og hvor ofte klippingen utføres. Kontakt oss for et gratis og uforpliktende tilbud.',
	},
	{
		q: 'Utfører dere gressklipp for bedrifter og borettslag i Bergen?',
		a: 'Ja, vi tilbyr gressklipp i Bergen for private hjem, bedrifter, borettslag, sameier og kommersielle eiendommer. Vi kan tilby langsiktige serviceavtaler.',
	},
	{
		q: 'Hva er inkludert i tjenesten gressklipp i Bergen?',
		a: 'Tjenesten gressklipp i Bergen inkluderer vanligvis klipping av plenen, trimming av kanter, opprydding av gressavfall og mulighet for bortkjøring av bioavfall etter avtale.',
	},
	{
		q: 'Tilbyr dere andre hagetjenester i Bergen i tillegg til gressklipp?',
		a: 'Ja, i tillegg til gressklipp i Bergen tilbyr vi hagearbeid, beskjæring av trær, trefelling, opprydding i hagen, maling og generell eiendomsvedlikehold.',
	},
	{
		q: 'Hvor raskt kan dere starte med gressklipp i Bergen etter bestilling?',
		a: 'I de fleste tilfeller kan vi starte med gressklipp i Bergen innen få dager etter bestilling. Ring oss eller fyll ut skjemaet, så finner vi en løsning sammen.',
	},
]

const Contact = () => {
	return (
		<>
			<Hero />
			<ContactUs />
			<span className='divider'></span>
			<FAQ
				subtitle='Her er svarene på de vanligste spørsmålene vi mottar. Hvis
					du ikke finner svaret her, ikke nøl med å kontakte oss.'
				qaa={qaa}
			/>
		</>
	)
}

export default Contact
