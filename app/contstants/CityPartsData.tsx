import { RiScissorsCutFill, RiPlantFill } from 'react-icons/ri'
import { GiGardeningShears, GiGrass } from 'react-icons/gi'
import { FaTree, FaSnowflake } from 'react-icons/fa'
import { MdOutlineCleaningServices } from 'react-icons/md'
import { TbSalt } from 'react-icons/tb'

export const CityPartData = {
	fana: {
		seo: {
			title: 'Gressklipping Fana',
			description:
				'Profesjonell gressklipping i Fana. Vi tilbyr plenklipping, hagevedlikehold og trefelling i Fana samt nærliggende områder som Nesttun, Lagunen og Paradis i Bergen.',
			image: '/images/plenklipperen_hero.jpg',
		},
		content: {
			iconsGrid: {
				title: 'Tjenester i',
				grayTitle: 'Fana',
				grid: [
					{
						icon: <GiGrass />,
						title: 'Gressklipping',
						subTitle: 'Regelmessig plenklipping for private hager.',
					},
					{
						icon: <GiGardeningShears />,
						title: 'Hekkeklipp',
						subTitle: 'Beskjæring av hekker og busker.',
					},
					{
						icon: <RiPlantFill />,
						title: 'Hagevedlikehold',
						subTitle: 'Stell av hager og grøntområder.',
					},
					{
						icon: <FaTree />,
						title: 'Trefelling',
						subTitle: 'Sikker felling av trær.',
					},
					{
						icon: <FaSnowflake />,
						title: 'Snørydding',
						subTitle: 'Snømåking av gårdsplasser og gangveier.',
					},
					{
						icon: <TbSalt />,
						title: 'Strøing',
						subTitle: 'Salting av uteområder om vinteren.',
					},
				],
			},
			faq: {
				subtitle:
					'Vanlige spørsmål om gressklipping og hagearbeid i Fana',
				data: [
					{
						q: 'Hvor ofte bør gresset klippes i Fana?',
						a: 'De fleste plener bør klippes hver 7–10 dag i vekstsesongen.',
					},
					{
						q: 'Tilbyr dere også hagearbeid i Fana?',
						a: 'Ja, vi tilbyr gressklipping, beskjæring av hekker og hagevedlikehold.',
					},
					{
						q: 'Arbeider dere kun i Fana?',
						a: 'Nei, vi jobber også i Nesttun, Lagunen, Åsane og Laksevåg.',
					},
					{
						q: 'Kan jeg få fast avtale på plenklipping?',
						a: 'Ja, vi tilbyr faste vedlikeholdsavtaler gjennom sesongen.',
					},
					{
						q: 'Tilbyr dere tjenester for borettslag?',
						a: 'Ja, vi jobber både for private boliger og borettslag.',
					},
					{
						q: 'Hva koster gressklipping i Fana?',
						a: 'Pris avhenger av størrelse på plen og hyppighet.',
					},
					{
						q: 'Utfører dere trefelling i området?',
						a: 'Ja, vi tilbyr trygg trefelling i Fana.',
					},
					{
						q: 'Kan dere rydde hagen etter vinteren?',
						a: 'Ja, vi hjelper med vårklargjøring av hager.',
					},
					{
						q: 'Hvordan bestiller jeg gressklipping?',
						a: 'Kontakt oss via nettsiden for et tilbud.',
					},
				],
			},
		},
		map: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Fana Bergen&z=14&output=embed',
	},

	nesttun: {
		seo: {
			title: 'Hagevedlikehold Nesttun',
			description:
				'Hagevedlikehold i Nesttun. Vi tilbyr plenklipping, hekkeklipp og hagearbeid i Nesttun samt områder som Fana, Lagunen og Paradis i Bergen sør.',
			image: '/images/hage.',
		},
		content: {
			iconsGrid: {
				title: 'Hagetjenester i',
				grayTitle: 'Nesttun',
				grid: [
					{
						icon: <GiGrass />,
						title: 'Plenklipping',
						subTitle: 'Klipping av plen gjennom hele sesongen.',
					},
					{
						icon: <RiScissorsCutFill />,
						title: 'Hekkeklipp',
						subTitle: 'Forming og vedlikehold av hekker.',
					},
					{
						icon: <RiPlantFill />,
						title: 'Hagearbeid',
						subTitle: 'Vedlikehold av blomsterbed og planter.',
					},
					{
						icon: <FaTree />,
						title: 'Trefelling',
						subTitle: 'Felling av trær i hager.',
					},
					{
						icon: <MdOutlineCleaningServices />,
						title: 'Opprydding',
						subTitle: 'Rydding av hager og uteområder.',
					},
					{
						icon: <FaSnowflake />,
						title: 'Snørydding',
						subTitle: 'Vintervedlikehold av eiendom.',
					},
				],
			},
			faq: {
				subtitle: 'Svar på spørsmål om hagevedlikehold i Nesttun',
				data: [
					{
						q: 'Tilbyr dere hagevedlikehold i hele Nesttun?',
						a: 'Ja, vi jobber i hele Nesttun og nærliggende områder som Fana og Lagunen.',
					},
					{
						q: 'Kan dere klippe hekk?',
						a: 'Ja, vi tilbyr profesjonell hekkeklipp.',
					},
					{
						q: 'Jobber dere også andre steder i Bergen?',
						a: 'Ja, vi jobber i Åsane, Laksevåg og Fyllingsdalen.',
					},
					{
						q: 'Tilbyr dere faste avtaler?',
						a: 'Ja, vi tilbyr faste avtaler for vedlikehold.',
					},
					{
						q: 'Utfører dere trefelling?',
						a: 'Ja, vi tilbyr trefelling og opprydding.',
					},
					{
						q: 'Kan dere rydde hagen etter vinter?',
						a: 'Ja, vi tilbyr vårklargjøring.',
					},
					{
						q: 'Hva koster hagevedlikehold?',
						a: 'Pris varierer etter størrelse på oppdraget.',
					},
					{
						q: 'Tilbyr dere vintertjenester?',
						a: 'Ja, vi tilbyr snørydding og strøing.',
					},
					{
						q: 'Hvordan kontakter jeg dere?',
						a: 'Send oss en melding via nettsiden.',
					},
				],
			},
		},
		map: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Nesttun Bergen&z=14&output=embed',
	},

	asane: {
		seo: {
			title: 'Plenklipping Åsane',
			description:
				'Plenklipping i Åsane. Vi tilbyr gressklipping, hagevedlikehold og trefelling i Åsane samt nærliggende områder som Arna og Bergen sentrum.',
			image: '/images/plen.',
		},
		content: {
			iconsGrid: {
				title: 'Vedlikehold av uteområder i',
				grayTitle: 'Åsane',
				grid: [
					{
						icon: <GiGrass />,
						title: 'Gressklipping',
						subTitle: 'Vedlikehold av plen i private hager.',
					},
					{
						icon: <RiScissorsCutFill />,
						title: 'Kantklipping',
						subTitle: 'Trimming rundt stier og kanter.',
					},
					{
						icon: <RiPlantFill />,
						title: 'Hagevedlikehold',
						subTitle: 'Stell av busker og planter.',
					},
					{
						icon: <FaTree />,
						title: 'Trefelling',
						subTitle: 'Sikker felling av trær.',
					},
					{
						icon: <MdOutlineCleaningServices />,
						title: 'Hageopprydding',
						subTitle: 'Fjerning av løv og avfall.',
					},
					{
						icon: <FaSnowflake />,
						title: 'Snørydding',
						subTitle: 'Snømåking av uteområder.',
					},
				],
			},
			faq: {
				subtitle: 'Ofte stilte spørsmål om plenklipping i Åsane',
				data: [
					{
						q: 'Tilbyr dere plenklipping i hele Åsane?',
						a: 'Ja, vi jobber i hele Åsane og nærliggende områder.',
					},
					{
						q: 'Hvor ofte bør plenen klippes?',
						a: 'Vanligvis hver 7–14 dag.',
					},
					{
						q: 'Utfører dere også hagearbeid?',
						a: 'Ja, vi tilbyr komplett hagevedlikehold.',
					},
					{
						q: 'Kan dere ta oppdrag for borettslag?',
						a: 'Ja, vi jobber med både private og borettslag.',
					},
					{
						q: 'Jobber dere også i Fana og Nesttun?',
						a: 'Ja, vi dekker store deler av Bergen.',
					},
					{
						q: 'Tilbyr dere trefelling?',
						a: 'Ja, vi tilbyr trygg trefelling.',
					},
					{
						q: 'Har dere faste avtaler?',
						a: 'Ja, vi tilbyr faste avtaler.',
					},
					{
						q: 'Kan dere rydde hagen?',
						a: 'Ja, vi tilbyr opprydding av uteområder.',
					},
					{
						q: 'Hvordan bestiller jeg tjeneste?',
						a: 'Kontakt oss via nettsiden.',
					},
				],
			},
		},
		map: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Åsane Bergen&z=14&output=embed',
	},

	fyllingsdalen: {
		seo: {
			title: 'Hagearbeid Fyllingsdalen',
			description:
				'Hagearbeid i Fyllingsdalen. Vi tilbyr plenklipping, hekkeklipp og vedlikehold av uteområder i Fyllingsdalen samt Laksevåg og andre deler av Bergen.',
			image: '/images/hage2.',
		},
		content: {
			iconsGrid: {
				title: 'Hageservice i',
				grayTitle: 'Fyllingsdalen',
				grid: [
					{
						icon: <GiGrass />,
						title: 'Plenklipping',
						subTitle: 'Regelmessig klipping av plen.',
					},
					{
						icon: <GiGardeningShears />,
						title: 'Hekkeklipp',
						subTitle: 'Vedlikehold av hekker.',
					},
					{
						icon: <RiPlantFill />,
						title: 'Hagearbeid',
						subTitle: 'Generelt hagevedlikehold.',
					},
					{
						icon: <FaTree />,
						title: 'Trefelling',
						subTitle: 'Felling av trær i hager.',
					},
					{
						icon: <MdOutlineCleaningServices />,
						title: 'Opprydding',
						subTitle: 'Rydding av uteområder.',
					},
					{
						icon: <FaSnowflake />,
						title: 'Snørydding',
						subTitle: 'Snømåking om vinteren.',
					},
				],
			},
			faq: {
				subtitle: 'Spørsmål om hagearbeid i Fyllingsdalen',
				data: [
					{
						q: 'Tilbyr dere hagearbeid i hele Fyllingsdalen?',
						a: 'Ja, vi jobber i hele området.',
					},
					{
						q: 'Kan dere klippe hekk?',
						a: 'Ja, vi tilbyr hekkeklipp.',
					},
					{
						q: 'Tilbyr dere plenklipping?',
						a: 'Ja, vi klipper plener for private og borettslag.',
					},
					{
						q: 'Jobber dere også i andre bydeler?',
						a: 'Ja, vi jobber i hele Bergen.',
					},
					{
						q: 'Kan dere felle trær?',
						a: 'Ja, vi tilbyr trefelling.',
					},
					{
						q: 'Tilbyr dere vintertjenester?',
						a: 'Ja, snørydding og strøing.',
					},
					{
						q: 'Hvor ofte bør plen klippes?',
						a: 'Vanligvis hver uke eller annenhver uke.',
					},
					{
						q: 'Hva koster hagearbeid?',
						a: 'Pris avhenger av oppdraget.',
					},
					{
						q: 'Hvordan får jeg tilbud?',
						a: 'Send forespørsel via nettsiden.',
					},
				],
			},
		},
		map: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Fyllingsdalen Bergen&z=14&output=embed',
	},

	lagunen: {
		seo: {
			title: 'Gressklipping Lagunen',
			description:
				'Gressklipping i Lagunen og Rådal. Vi tilbyr plenklipping, hagearbeid og trefelling i Lagunen samt Nesttun og Fana i Bergen sør.',
			image: '/images/plen3.',
		},
		content: {
			iconsGrid: {
				title: 'Utearbeid i området',
				grayTitle: 'Lagunen',
				grid: [
					{
						icon: <GiGrass />,
						title: 'Gressklipping',
						subTitle: 'Klipping av plen i hager.',
					},
					{
						icon: <RiScissorsCutFill />,
						title: 'Kantklipping',
						subTitle: 'Trimming av kanter.',
					},
					{
						icon: <RiPlantFill />,
						title: 'Hagearbeid',
						subTitle: 'Stell av planter og bed.',
					},
					{
						icon: <FaTree />,
						title: 'Trefelling',
						subTitle: 'Felling av trær.',
					},
					{
						icon: <MdOutlineCleaningServices />,
						title: 'Hageopprydding',
						subTitle: 'Rydding av uteområder.',
					},
					{
						icon: <TbSalt />,
						title: 'Strøing',
						subTitle: 'Salting av gangveier.',
					},
				],
			},
			faq: {
				subtitle: 'Vanlige spørsmål om gressklipping i Lagunen',
				data: [
					{
						q: 'Tilbyr dere gressklipping i Lagunen?',
						a: 'Ja, vi jobber i Lagunen og Rådal.',
					},
					{
						q: 'Jobber dere også i Fana?',
						a: 'Ja, vi jobber ofte i Fana og Nesttun.',
					},
					{
						q: 'Kan dere hjelpe med hagearbeid?',
						a: 'Ja, vi tilbyr komplett hagevedlikehold.',
					},
					{
						q: 'Tilbyr dere trefelling?',
						a: 'Ja, vi kan felle trær.',
					},
					{
						q: 'Kan dere klippe hekk?',
						a: 'Ja, vi tilbyr hekkeklipp.',
					},
					{
						q: 'Hvor ofte klipper dere plen?',
						a: 'Vanligvis hver uke eller annenhver uke.',
					},
					{
						q: 'Jobber dere i andre bydeler?',
						a: 'Ja, vi jobber i hele Bergen.',
					},
					{
						q: 'Tilbyr dere vintertjenester?',
						a: 'Ja, snørydding og strøing.',
					},
					{
						q: 'Hvordan bestiller jeg?',
						a: 'Kontakt oss via nettsiden.',
					},
				],
			},
		},
		map: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Lagunen Bergen&z=14&output=embed',
	},

	laksevag: {
		seo: {
			title: 'Plenklipping Laksevåg',
			description:
				'Plenklipping i Laksevåg. Vi tilbyr gressklipping, hagevedlikehold og utearbeid i Laksevåg samt Fyllingsdalen og Bergen sentrum.',
			image: '/images/plen4.',
		},
		content: {
			iconsGrid: {
				title: 'Vedlikeholdstjenester i',
				grayTitle: 'Laksevåg',
				grid: [
					{
						icon: <GiGrass />,
						title: 'Plenklipping',
						subTitle: 'Klipping av plen.',
					},
					{
						icon: <RiScissorsCutFill />,
						title: 'Kantklipping',
						subTitle: 'Trimming av plenkanter.',
					},
					{
						icon: <RiPlantFill />,
						title: 'Hagearbeid',
						subTitle: 'Vedlikehold av hager.',
					},
					{
						icon: <FaTree />,
						title: 'Trefelling',
						subTitle: 'Felling av trær.',
					},
					{
						icon: <FaSnowflake />,
						title: 'Snørydding',
						subTitle: 'Snømåking av uteområder.',
					},
					{
						icon: <TbSalt />,
						title: 'Strøing',
						subTitle: 'Strøing av glatte flater.',
					},
				],
			},
			faq: {
				subtitle: 'Ofte stilte spørsmål om plenklipping i Laksevåg',
				data: [
					{
						q: 'Tilbyr dere plenklipping i hele Laksevåg?',
						a: 'Ja, vi jobber i hele området.',
					},
					{
						q: 'Jobber dere også i sentrum?',
						a: 'Ja, vi jobber i Bergen sentrum.',
					},
					{
						q: 'Tilbyr dere hagearbeid?',
						a: 'Ja, vi utfører komplett hagevedlikehold.',
					},
					{
						q: 'Kan dere felle trær?',
						a: 'Ja, vi tilbyr trefelling.',
					},
					{
						q: 'Kan dere klippe hekk?',
						a: 'Ja, vi tilbyr hekkeklipp.',
					},
					{
						q: 'Hvor ofte klipper dere plen?',
						a: 'Vanligvis hver 7–14 dag.',
					},
					{
						q: 'Jobber dere i Fyllingsdalen?',
						a: 'Ja, vi jobber også der.',
					},
					{
						q: 'Tilbyr dere vintervedlikehold?',
						a: 'Ja, vi tilbyr snørydding og strøing.',
					},
					{
						q: 'Hvordan kontakter jeg dere?',
						a: 'Send oss en melding via nettsiden.',
					},
				],
			},
		},
		map: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Laksevåg Bergen&z=14&output=embed',
	},
}
