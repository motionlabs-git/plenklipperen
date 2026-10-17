import { RiScissorsCutFill, RiPlantFill } from 'react-icons/ri'
import { GiGrass } from 'react-icons/gi'
import { FaTree, FaSnowflake } from 'react-icons/fa'
import { TbSalt } from 'react-icons/tb'

export type CityPart = {
	name: string
	link: string
	seo: {
		title: string
		description: string
		image: string
	}
	// one-liner for the /omrader overview
	summary: string
	intro: string[]
	neighborhoods: string[]
	highlights: { title: string; subTitle: string }[]
	faq: { q: string; a: string }[]
	// real jobs from the area – the section renders only when filled
	projects?: { title: string; img: string }[]
	mapQuery: string
}

// Same service offer in every area, the area pages differ in their local content
export const CityPartServices = [
	{
		icon: <GiGrass />,
		title: 'Plenklipping',
		subTitle: 'Fast eller engangs klipping av plen, inkludert kantklipp.',
	},
	{
		icon: <RiScissorsCutFill />,
		title: 'Hekkeklipp',
		subTitle: 'Klipping og forming av hekker og busker.',
	},
	{
		icon: <RiPlantFill />,
		title: 'Hagevedlikehold',
		subTitle: 'Luking, stell av bed og rydding av hageavfall.',
	},
	{
		icon: <FaTree />,
		title: 'Trefelling',
		subTitle: 'Trygg felling av trær og opprydding etterpå.',
	},
	{
		icon: <FaSnowflake />,
		title: 'Snørydding',
		subTitle: 'Snømåking av innkjørsler, gangveier og parkering.',
	},
	{
		icon: <TbSalt />,
		title: 'Strøing',
		subTitle: 'Strøing av glatte flater for trygg ferdsel om vinteren.',
	},
]

export const CityPartData = {
	fana: {
		name: 'Fana',
		link: '/gressklipping-fana',
		seo: {
			title: 'Gressklipping og hagearbeid i Fana',
			description:
				'Gressklipping, hekkeklipp og hagevedlikehold i Fana – fra Nesttun og Paradis til Rådal og Lagunen. Faste avtaler for villaer, borettslag og bedrifter i Bergen sør.',
			image: '/images/plenklipperen_busker1.jpg',
		},
		summary:
			'Store villahager, hekker og borettslag – fra Nesttun og Paradis til Rådal og Lagunen.',
		intro: [
			'Fana er Bergens største bydel, og her finner du alt fra eneboliger med store hager på Hop og i Paradis til borettslag og næringsbygg rundt Nesttun og Lagunen. Vi klipper plen, former hekker og holder uteområdene i orden for både private og bedrifter i hele bydelen.',
			'Fra vår base på Sandsli har vi kort vei til Fana. Mange velger fast avtale gjennom hele sesongen – da slipper du å tenke på plenen, og vi rydder etter oss hver gang.',
		],
		neighborhoods: [
			'Nesttun',
			'Paradis',
			'Hop',
			'Skjold',
			'Stend',
			'Rådal',
			'Lagunen',
			'Kalandseidet',
		],
		highlights: [
			{
				title: 'Store villahager',
				subTitle:
					'Mange eiendommer i Fana har store plener. Vi har utstyr som gjør jobben effektiv, også på større tomter.',
			},
			{
				title: 'Hekker og busker',
				subTitle:
					'Tette hekker og buskas er typisk for villaområdene. Vi klipper, former og kjører bort hageavfallet.',
			},
			{
				title: 'Borettslag og næring',
				subTitle:
					'Rundt Nesttun og Lagunen er det mange borettslag og næringsbygg. Vi tilbyr faste avtaler for plen og fellesarealer.',
			},
		],
		faq: [
			{
				q: 'Dekker dere hele Fana?',
				a: 'Ja. Vi jobber i hele bydelen, blant annet i Nesttun, Paradis, Hop, Skjold, Stend, Rådal, Lagunen og Kalandseidet. Er du usikker på om vi kommer til deg, er det bare å ta kontakt.',
			},
			{
				q: 'Hvor ofte bør plenen klippes?',
				a: 'I vekstsesongen anbefaler vi klipping hver 7.–10. dag. Da holder plenen seg tett og frisk, og gresset blir ikke for langt mellom hver klipp.',
			},
			{
				q: 'Kan dere klippe store hekker?',
				a: 'Ja. Vi klipper og former både lave og høye hekker, og tar med oss hageavfallet etterpå. De fleste hekker har godt av klipping én til to ganger i året.',
			},
			{
				q: 'Tilbyr dere fast avtale for borettslag i Fana?',
				a: 'Ja. Borettslag og sameier kan få fast avtale som dekker plenklipp, kantklipp, hekker og rydding av fellesarealer – og snørydding om vinteren hvis ønskelig.',
			},
			{
				q: 'Hva koster gressklipping i Fana?',
				a: 'Prisen avhenger av størrelsen på plenen, hvor ofte den skal klippes og om du ønsker tillegg som kantklipp eller bortkjøring. Send oss en forespørsel, så får du et uforpliktende tilbud.',
			},
			{
				q: 'Hjelper dere med snørydding i Fana?',
				a: 'Ja. Vi tilbyr snømåking og strøing av innkjørsler, gangveier og parkeringsplasser, både som fast vinteravtale og ved behov.',
			},
		],
		mapQuery: 'Fana Bergen',
	},

	ytrebygda: {
		name: 'Ytrebygda',
		link: '/hagevedlikehold-ytrebygda',
		seo: {
			title: 'Hagevedlikehold og plenklipping i Ytrebygda',
			description:
				'Hagevedlikehold, plenklipping og snørydding i Ytrebygda – Sandsli, Kokstad, Blomsterdalen, Søreide og Flesland. Vi har base på Sandsli og kort vei til deg.',
			image: '/images/plenklipperen_hero.jpg',
		},
		summary:
			'Vår hjemmebydel – næringsparker på Kokstad og Sandsli og boligfelt i Blomsterdalen og Søreide.',
		intro: [
			'Ytrebygda er vår hjemmebydel – vi holder til på Sandsli og har kort vei til kunder i hele bydelen. Her finner du både eneboliger og boligfelt i Blomsterdalen og på Søreide, og store næringsområder på Kokstad, Sandsli og rundt Flesland.',
			'Kort kjørevei gjør det enkelt å være fleksible med tidspunkter, og vi er raskt ute når snøen kommer om vinteren.',
		],
		neighborhoods: [
			'Sandsli',
			'Kokstad',
			'Blomsterdalen',
			'Søreide',
			'Flesland',
		],
		highlights: [
			{
				title: 'Næringsparker',
				subTitle:
					'Grøntarealer rundt kontor- og næringsbygg på Kokstad og Sandsli skal se representative ut. Vi tilbyr faste avtaler for plen, busker og rydding.',
			},
			{
				title: 'Boligfelt',
				subTitle:
					'Fast plenklipp for eneboliger og rekkehus i Blomsterdalen, på Søreide og i nærliggende felt.',
			},
			{
				title: 'Kort vei om vinteren',
				subTitle:
					'Med base i bydelen er vi raskt ute med snømåking og strøing når snøen kommer.',
			},
		],
		faq: [
			{
				q: 'Hvor holder dere til?',
				a: 'Vi har base i Nordre Vardhaugen 71 på Sandsli, midt i Ytrebygda. Derfor har vi kort vei til kunder i hele bydelen.',
			},
			{
				q: 'Tilbyr dere vedlikehold for næringsbygg på Kokstad og Sandsli?',
				a: 'Ja. Vi tilbyr faste avtaler for plenklipp, beskjæring, rydding av uteområder og snørydding for bedrifter og gårdeiere.',
			},
			{
				q: 'Hvor ofte bør plenen klippes?',
				a: 'I vekstsesongen anbefaler vi klipping hver 7.–10. dag. For næringseiendommer som skal se representative ut, er ukentlig klipp ofte det beste.',
			},
			{
				q: 'Kan dere ta snørydding på kort varsel?',
				a: 'Kunder med fast vinteravtale får prioritet når snøen kommer. Ta gjerne kontakt også ved behov, så hjelper vi hvis vi har kapasitet.',
			},
			{
				q: 'Tilbyr dere hekkeklipp og beskjæring?',
				a: 'Ja. Vi klipper hekker, beskjærer busker og mindre trær, og kjører bort hageavfallet.',
			},
			{
				q: 'Hvordan får jeg et tilbud?',
				a: 'Send oss en forespørsel via kontaktskjemaet eller ring oss, så tar vi kontakt med et uforpliktende tilbud.',
			},
		],
		mapQuery: 'Ytrebygda Bergen',
	},

	asane: {
		name: 'Åsane',
		link: '/plenklipping-asane',
		seo: {
			title: 'Plenklipping og hagearbeid i Åsane',
			description:
				'Plenklipping, hekkeklipp og hagevedlikehold i Åsane – Ulset, Tertnes, Eidsvåg, Myrdal og Flaktveit. Faste avtaler for eneboliger og borettslag, og snørydding om vinteren.',
			image: '/images/grass9.jpg',
		},
		summary:
			'Eneboliger og store borettslag, skrånende tomter og helårsavtaler med snørydding.',
		intro: [
			'Åsane er en stor bydel med alt fra eneboliger på Tertnes og i Eidsvåg til større borettslag rundt Ulset, Myrdal og Flaktveit. Vi tilbyr plenklipping, hekkeklipp og vedlikehold av uteområder for både private og borettslag i hele Åsane.',
			'Mange av områdene ligger i skrånende terreng, og i de høyereliggende delene blir snøen ofte liggende lenger enn i sentrum. Derfor kombinerer mange sommervedlikehold med snørydding og strøing om vinteren.',
		],
		neighborhoods: [
			'Ulset',
			'Tertnes',
			'Eidsvåg',
			'Myrdal',
			'Flaktveit',
			'Åsane sentrum',
			'Haukås',
			'Breistein',
		],
		highlights: [
			{
				title: 'Borettslag og fellesarealer',
				subTitle:
					'Store grøntarealer krever jevnlig klipping gjennom sesongen. Vi tilbyr faste avtaler med plenklipp, kantklipp og rydding.',
			},
			{
				title: 'Skrånende tomter',
				subTitle:
					'Bratte plener og skråninger krever riktig utstyr. Vi klipper også vanskelig tilgjengelige områder trygt og effektivt.',
			},
			{
				title: 'Helårsavtale',
				subTitle:
					'Plenklipp om sommeren og snømåking og strøing om vinteren – én leverandør gjennom hele året.',
			},
		],
		faq: [
			{
				q: 'Dekker dere hele Åsane?',
				a: 'Ja, vi jobber i hele bydelen – blant annet på Ulset, Tertnes, Eidsvåg, Myrdal, Flaktveit, Haukås og Breistein.',
			},
			{
				q: 'Kan dere klippe bratte plener og skråninger?',
				a: 'Ja. Vi har utstyr for både flate plener og skrånende terreng, og vurderer alltid hva som er tryggest og mest effektivt for tomten din.',
			},
			{
				q: 'Tilbyr dere fast avtale for borettslag i Åsane?',
				a: 'Ja. Vi lager avtaler tilpasset borettslag og sameier, med fast klippefrekvens, kantklipp og rydding av fellesarealer.',
			},
			{
				q: 'Kan jeg kombinere plenklipp og snørydding?',
				a: 'Ja. Mange velger en helårsavtale med plenhold om sommeren og snømåking og strøing om vinteren.',
			},
			{
				q: 'Hvor ofte bør plenen klippes i Åsane?',
				a: 'I vekstsesongen anbefaler vi klipping hver 7.–14. dag, avhengig av vær og hvor raskt gresset vokser. Etter mye regn vokser gresset ofte raskere.',
			},
			{
				q: 'Hvordan får jeg et tilbud?',
				a: 'Send oss en forespørsel via skjemaet med adresse og omtrentlig størrelse på plenen, så tar vi kontakt med et uforpliktende tilbud.',
			},
		],
		mapQuery: 'Åsane Bergen',
	},

	fyllingsdalen: {
		name: 'Fyllingsdalen',
		link: '/hagearbeid-fyllingsdalen',
		seo: {
			title: 'Hagearbeid og plenklipping i Fyllingsdalen',
			description:
				'Hagearbeid, plenklipping og vedlikehold av fellesarealer i Fyllingsdalen. Faste avtaler for borettslag, sameier og eneboliger – med hjelp til dugnad og bortkjøring av hageavfall.',
			image: '/images/stripes.jpg',
		},
		summary:
			'Borettslag med store felles grøntområder – faste avtaler og hjelp til dugnaden.',
		intro: [
			'Fyllingsdalen ble i stor grad bygget ut på 1960- og 70-tallet, og bydelen preges av borettslag med store, felles grøntområder. Vi hjelper borettslag, sameier og private med plenklipping, hekkeklipp og jevnlig vedlikehold av uteområdene.',
			'Store fellesarealer ser best ut når de klippes jevnlig og kantene holdes ryddige. Med en fast avtale får styret én kontaktperson og forutsigbart vedlikehold gjennom hele sesongen.',
		],
		neighborhoods: ['Oasen', 'Spelhaugen', 'Sælen', 'Løvås'],
		highlights: [
			{
				title: 'Store fellesarealer',
				subTitle:
					'Vi klipper store gressarealer effektivt og holder kantene rundt stier, lekeplasser og parkering ryddige.',
			},
			{
				title: 'Hjelp til dugnaden',
				subTitle:
					'Vi tar de tunge jobbene før eller etter dugnaden – beskjæring, rydding av busker og bortkjøring av hageavfall.',
			},
			{
				title: 'Eneboliger og rekkehus',
				subTitle:
					'Private hager får samme grundige oppfølging, enten du trenger en engangsjobb eller fast plenklipp.',
			},
		],
		faq: [
			{
				q: 'Tilbyr dere hagearbeid for borettslag i Fyllingsdalen?',
				a: 'Ja. Vi tilbyr faste avtaler for plenklipp, kantklipp, hekker og rydding av fellesarealer, tilpasset størrelsen på borettslaget.',
			},
			{
				q: 'Kan dere hjelpe til før dugnaden?',
				a: 'Ja. Vi kan ta beskjæring av hekker og busker, felling av mindre trær og bortkjøring av hageavfall, slik at dugnaden kan brukes på resten.',
			},
			{
				q: 'Hvor ofte bør fellesarealer klippes?',
				a: 'For pene fellesarealer anbefaler vi klipping hver 7.–14. dag i sesongen. Plener som brukes mye, for eksempel ved lekeplasser og inngangspartier, har ofte godt av hyppigere klipp.',
			},
			{
				q: 'Fjerner dere hageavfallet?',
				a: 'Ja. Gress, kvist og greiner kjører vi bort etter jobben, slik at uteområdet er ryddig når vi drar.',
			},
			{
				q: 'Tilbyr dere snørydding i Fyllingsdalen?',
				a: 'Ja, vi tilbyr snømåking og strøing av gangveier, inngangspartier og parkeringsplasser.',
			},
			{
				q: 'Hvordan får jeg et tilbud?',
				a: 'Fyll ut kontaktskjemaet med adresse og hva du trenger hjelp med. For borettslag er det fint om du oppgir omtrentlig størrelse på arealene.',
			},
		],
		mapQuery: 'Fyllingsdalen Bergen',
	},

	laksevag: {
		name: 'Laksevåg',
		link: '/plenklipping-laksevag',
		seo: {
			title: 'Plenklipping og hagearbeid i Laksevåg',
			description:
				'Plenklipping, hekkeklipp og hagevedlikehold i Laksevåg – fra Damsgård og Gravdal til Loddefjord, Olsvik og Godvik. For private, borettslag og bedrifter.',
			image: '/images/grass6.jpg',
		},
		summary:
			'Eldre hager ved byfjorden, nye boligfelt i vest og næringseiendom – fra Damsgård til Godvik.',
		intro: [
			'Laksevåg strekker seg fra Damsgård og Gravdal ved byfjorden til Loddefjord, Olsvik og Godvik lenger vest. Bydelen har en blanding av eldre bebyggelse, nyere boligfelt og næringsområder, og vi tilbyr plenklipping og hagevedlikehold for alle typer eiendommer.',
			'Mange tomter ligger nær sjøen og er utsatt for vind og mye nedbør. Riktig klippehøyde og jevnlig vedlikehold gjør at plenen tåler været bedre og holder seg grønn hele sesongen.',
		],
		neighborhoods: [
			'Damsgård',
			'Gravdal',
			'Olsvik',
			'Loddefjord',
			'Godvik',
			'Kjøkkelvik',
			'Mathopen',
		],
		highlights: [
			{
				title: 'Eldre hager',
				subTitle:
					'Etablerte hager har ofte gjengrodde hekker og busker. Vi beskjærer, rydder og får hagen tilbake i form.',
			},
			{
				title: 'Nye boligfelt',
				subTitle:
					'Fast plenklipp i nyere felt i Loddefjord og Olsvik – praktisk for travle familier som vil bruke helgene på noe annet.',
			},
			{
				title: 'Næringseiendom',
				subTitle:
					'Vi holder grøntarealer rundt bygg og parkering ryddige og representative gjennom hele året.',
			},
		],
		faq: [
			{
				q: 'Dekker dere hele Laksevåg?',
				a: 'Ja, vi jobber i hele bydelen – blant annet på Damsgård, Gravdal, Olsvik, Loddefjord, Godvik, Kjøkkelvik og Mathopen.',
			},
			{
				q: 'Kan dere rydde en gjengrodd hage?',
				a: 'Ja. Vi beskjærer hekker og busker, fjerner ugress og kjører bort hageavfall, slik at hagen blir enkel å vedlikeholde videre.',
			},
			{
				q: 'Hvilken klippehøyde er best i et værhardt klima?',
				a: 'Ikke klipp for kort. Rundt 5–6 cm gir en sterkere plen som tåler både vind, nedbør og tørre perioder bedre.',
			},
			{
				q: 'Tilbyr dere fast plenklipp?',
				a: 'Ja. Med fast avtale kommer vi til faste tider gjennom hele sesongen, og du slipper å bestille hver gang.',
			},
			{
				q: 'Tilbyr dere tjenester for bedrifter i Laksevåg?',
				a: 'Ja. Vi vedlikeholder grøntarealer rundt næringsbygg og tilbyr også snørydding og strøing om vinteren.',
			},
			{
				q: 'Hva koster plenklipping i Laksevåg?',
				a: 'Prisen avhenger av størrelsen på plenen, terrenget og hvor ofte den skal klippes. Ta kontakt for et uforpliktende tilbud.',
			},
		],
		mapQuery: 'Laksevåg Bergen',
	},

	arstad: {
		name: 'Årstad',
		link: '/gressklipping-arstad',
		seo: {
			title: 'Gressklipping og hagearbeid i Årstad',
			description:
				'Gressklipping, hekkeklipp og hagevedlikehold i Årstad – Landås, Minde, Fridalen, Kronstad og Slettebakken. For villaer, borettslag og sameier.',
			image: '/images/grass10.jpg',
		},
		summary:
			'Etablerte villahager på Landås og i Fridalen, og sameier og borettslag rundt Kronstad.',
		intro: [
			'Årstad er en tett befolket bydel med eldre villastrøk på Landås, i Fridalen og på Minde, og mange borettslag og sameier rundt Kronstad og Slettebakken. Hagene er ofte mindre enn i de ytre bydelene, men krever like mye oppfølging for å se velstelte ut.',
			'Vi tilbyr gressklipping, hekkeklipp og vedlikehold av bed og fellesarealer, med utstyr tilpasset mindre tomter og trange adkomster.',
		],
		neighborhoods: [
			'Landås',
			'Minde',
			'Fridalen',
			'Kronstad',
			'Wergeland',
			'Slettebakken',
			'Solheimsviken',
		],
		highlights: [
			{
				title: 'Etablerte villahager',
				subTitle:
					'Hager med hekker, frukttrær og bed trenger jevnlig stell. Vi hjelper med beskjæring, luking og plenklipp.',
			},
			{
				title: 'Sameier og borettslag',
				subTitle:
					'Fast vedlikehold av plen, kanter og fellesarealer – én avtale som gjør det enkelt for styret.',
			},
			{
				title: 'Små tomter',
				subTitle:
					'Vi tar også mindre plener og bakhager der det er begrenset plass å jobbe på.',
			},
		],
		faq: [
			{
				q: 'Dekker dere hele Årstad?',
				a: 'Ja – blant annet Landås, Minde, Fridalen, Kronstad, Wergeland, Slettebakken og Solheimsviken.',
			},
			{
				q: 'Tar dere oppdrag på små plener?',
				a: 'Ja. Også mindre plener og bakhager får god oppfølging, og små hager passer godt for fast klipp hver eller annenhver uke.',
			},
			{
				q: 'Kan dere beskjære frukttrær og busker?',
				a: 'Ja, vi beskjærer busker, hekker og mindre trær, og fjerner greiner og hageavfall etter jobben.',
			},
			{
				q: 'Tilbyr dere vedlikehold for sameier?',
				a: 'Ja. Vi tilbyr faste avtaler for plen, kanter, hekker og fellesarealer, og snørydding om vinteren hvis ønskelig.',
			},
			{
				q: 'Hvor ofte bør plenen klippes?',
				a: 'Vanligvis hver 7.–14. dag i vekstsesongen. Små plener i skygge vokser ofte saktere og klarer seg med sjeldnere klipp.',
			},
			{
				q: 'Hva koster hagearbeid i Årstad?',
				a: 'Prisen avhenger av oppdragets størrelse og hvor ofte vi skal komme. Ta kontakt for et uforpliktende tilbud.',
			},
		],
		mapQuery: 'Årstad Bergen',
	},

	sentrum: {
		name: 'Bergen sentrum',
		link: '/hagearbeid-bergen-sentrum',
		seo: {
			title: 'Hagearbeid og vedlikehold i Bergen sentrum',
			description:
				'Hagearbeid, hekkeklipp og vedlikehold av bakgårder og fellesarealer i Bergen sentrum – Nordnes, Sandviken, Møhlenpris, Kalfaret og Fjellsiden. Også snørydding og strøing.',
			image: '/images/bushes-citycentre.jpg',
		},
		summary:
			'Bakgårder, forhager og sameier i Bergenhus – og strøing av trapper og bratte gater om vinteren.',
		intro: [
			'I Bergen sentrum og resten av Bergenhus bydel er uteområdene ofte små, men mye brukt: bakgårder, forhager og fellesarealer i sameier. Vi hjelper sameier, gårdeiere og private med hagearbeid og vedlikehold på Nordnes, i Sandviken, på Møhlenpris, Kalfaret og Fjellsiden.',
			'Bratte gater og trapper gjør vinteren krevende i sentrum. Vi tilbyr snømåking og strøing av inngangspartier, fortau og trapper, slik at beboere og kunder kommer trygt frem.',
		],
		neighborhoods: [
			'Nordnes',
			'Sandviken',
			'Møhlenpris',
			'Nygårdshøyden',
			'Kalfaret',
			'Fjellsiden',
			'Marken',
		],
		highlights: [
			{
				title: 'Bakgårder og forhager',
				subTitle:
					'Små grøntområder blir fort uryddige. Vi klipper, luker og beskjærer, og holder bakgården pen gjennom sesongen.',
			},
			{
				title: 'Sameier og gårdeiere',
				subTitle:
					'Faste avtaler for vedlikehold av fellesarealer – én kontakt for styret eller forvalteren.',
			},
			{
				title: 'Trygg vinter',
				subTitle:
					'Snømåking og strøing av trapper, fortau og inngangspartier i bratte gater.',
			},
		],
		faq: [
			{
				q: 'Hvilke deler av sentrum dekker dere?',
				a: 'Vi jobber i hele Bergenhus bydel – blant annet på Nordnes, i Sandviken, på Møhlenpris, Nygårdshøyden, Kalfaret, Fjellsiden og Marken.',
			},
			{
				q: 'Tar dere små oppdrag i bakgårder?',
				a: 'Ja. Vi tar både enkeltoppdrag og faste avtaler, også for små bakgårder og forhager.',
			},
			{
				q: 'Kjører dere bort hageavfall?',
				a: 'Ja. Vi tar med oss gress, kvist og greiner etter jobben, så du slipper å finne plass til avfallet.',
			},
			{
				q: 'Tilbyr dere strøing av trapper og fortau?',
				a: 'Ja. Vi tilbyr snømåking og strøing av trapper, fortau og inngangspartier, som fast vinteravtale eller ved behov.',
			},
			{
				q: 'Tilbyr dere vedlikehold for sameier i sentrum?',
				a: 'Ja. Vi lager faste avtaler for fellesarealer med plen, hekker, bed og rydding, tilpasset sameiets behov.',
			},
			{
				q: 'Hvordan får jeg et tilbud?',
				a: 'Send oss en forespørsel med adresse og en kort beskrivelse av hva du trenger hjelp med, så får du et uforpliktende tilbud.',
			},
		],
		mapQuery: 'Bergen sentrum',
	},
} satisfies Record<string, CityPart>

export const CityParts: CityPart[] = Object.values(CityPartData)
