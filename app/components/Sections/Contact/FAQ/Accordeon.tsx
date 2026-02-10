'use client'
import React, { useState } from 'react'
import AccordeonCard from './AccordeonCard'

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

const Accordeon = () => {
	const [selected, setSelected] = useState<string | null>()

	const select = (id: string) => {
		if (selected === null || selected !== id) {
			setSelected(id)
		} else {
			setSelected(null)
		}
	}

	return (
		<div className='w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:gap-8 xl:grid-cols-3 mt-8'>
			<div className='lg:flex-1'>
				{qaa.slice(0, 3).map((card, id) => (
					<AccordeonCard
						key={`1-${id}`}
						onClick={() => select(`1-${id}`)}
						isSelected={selected === `1-${id}`}
						q={card.q}
						a={card.a}
					/>
				))}
			</div>

			<div className='flex-1'>
				{qaa.slice(3, 6).map((card, id) => (
					<AccordeonCard
						key={`2-${id}`}
						onClick={() => select(`2-${id}`)}
						isSelected={selected === `2-${id}`}
						q={card.q}
						a={card.a}
					/>
				))}
			</div>

			<div className='flex-1'>
				{qaa.slice(6, 9).map((card, id) => (
					<AccordeonCard
						key={`3-${id}`}
						onClick={() => select(`3-${id}`)}
						isSelected={selected === `3-${id}`}
						q={card.q}
						a={card.a}
					/>
				))}
			</div>
		</div>
	)
}

export default Accordeon
