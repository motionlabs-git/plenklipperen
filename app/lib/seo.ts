import type { Metadata } from 'next'
import { Contact } from '../contstants/contact'
import { CityPartLinks } from '../contstants/navigationLinks'

export const SITE_URL = 'https://plenklipperen.no'
export const SITE_NAME = 'Plenklipperen'
export const DEFAULT_OG_IMAGE = '/brand/open-graph.png'

const BUSINESS_ID = `${SITE_URL}/#business`

const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString()

// Builds page metadata with a self-referencing canonical and a complete
// Open Graph object (child openGraph replaces the layout one, it is not merged)
export const pageMetadata = ({
	title,
	description,
	path,
	image = DEFAULT_OG_IMAGE,
	keywords,
	article,
}: {
	title: string
	description: string
	path: string
	image?: string
	keywords?: string[]
	article?: { publishedTime: string; authors?: string[] }
}): Metadata => ({
	title,
	description,
	keywords,
	alternates: { canonical: path },
	openGraph: {
		title,
		description,
		url: path,
		siteName: SITE_NAME,
		locale: 'nb_NO',
		images: image,
		...(article
			? {
					type: 'article',
					publishedTime: article.publishedTime,
					authors: article.authors,
				}
			: { type: 'website' }),
	},
})

export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'HomeAndConstructionBusiness',
	'@id': BUSINESS_ID,
	name: SITE_NAME,
	url: SITE_URL,
	logo: absoluteUrl('/brand/logo.jpg'),
	image: absoluteUrl(DEFAULT_OG_IMAGE),
	description:
		'Profesjonell gressklipping, hagevedlikehold, trefelling og snørydding for private, borettslag og bedrifter i Bergen.',
	email: Contact.mail,
	telephone: `+47 ${Contact.phone}`,
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Nordre Vardhaugen 71',
		postalCode: '5253',
		addressLocality: 'Sandsli',
		addressRegion: 'Vestland',
		addressCountry: 'NO',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 60.3115494,
		longitude: 5.2819859,
	},
	areaServed: [
		{ '@type': 'City', name: 'Bergen' },
		...CityPartLinks.map((item) => ({
			'@type': 'Place',
			name: `${item.text}, Bergen`,
		})),
	],
	sameAs: [Contact.fbLink, Contact.igLink],
}

export const serviceSchema = ({
	title,
	description,
	path,
}: {
	title: string
	description: string
	path: string
}) => ({
	'@context': 'https://schema.org',
	'@type': 'Service',
	name: title,
	description,
	url: absoluteUrl(path),
	provider: { '@id': BUSINESS_ID },
	areaServed: { '@type': 'City', name: 'Bergen' },
})

export type Breadcrumb = { name: string; path: string }

export const breadcrumbSchema = (items: Breadcrumb[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [{ name: 'Hjem', path: '/' }, ...items].map(
		(item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})
	),
})

export const faqSchema =(qaa: { q: string; a: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: qaa.map((item) => ({
		'@type': 'Question',
		name: item.q,
		acceptedAnswer: { '@type': 'Answer', text: item.a },
	})),
})

export const blogPostingSchema = (post: {
	title: string
	slug: string
	coverImage: string
	date: string
	seo: { metaDescription: string }
}) => ({
	'@context': 'https://schema.org',
	'@type': 'BlogPosting',
	headline: post.title,
	description: post.seo.metaDescription,
	image: absoluteUrl(post.coverImage),
	datePublished: post.date,
	url: absoluteUrl(`/blogg/${post.slug}`),
	mainEntityOfPage: absoluteUrl(`/blogg/${post.slug}`),
	inLanguage: 'nb-NO',
	author: { '@id': BUSINESS_ID },
	publisher: { '@id': BUSINESS_ID },
})
