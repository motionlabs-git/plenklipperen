import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Navigation from './components/Layout/Navigation/Navigation'
import Footer from './components/Layout/Footer/Footer'
import JsonLd from './components/SEO/JsonLd'
import { DEFAULT_OG_IMAGE, SITE_NAME, localBusinessSchema } from './lib/seo'

const rubik = Rubik({
	variable: '--font-rubik',
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://plenklipperen.no'),
	authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
	title: {
		default: 'Hagevedlikehold og snørydding i Bergen | Plenklipperen',
		template: '%s | Plenklipperen',
	},
	description:
		'Vi tilbyr profesjonell gressklipp, hagevedlikehold, trefelling og snørydding for private og bedrifter i Bergen. Rask respons og pålitelig service hele året.',
	twitter: {
		card: 'summary_large_image',
	},
	openGraph: {
		title: 'Hagevedlikehold og snørydding i Bergen | Plenklipperen',
		description:
			'Vi tilbyr profesjonell gressklipp, hagevedlikehold, trefelling og snørydding for private og bedrifter i Bergen. Rask respons og pålitelig service hele året.',
		images: DEFAULT_OG_IMAGE,
		url: '/',
		siteName: SITE_NAME,
		locale: 'nb_NO',
		type: 'website',
	},
	icons: {
		icon: {
			url: '/brand/favicon.ico',
			href: '/brand/favicon.ico',
		},
		apple: {
			url: '/brand/apple-touch-icon.png',
			href: '/brand/apple-touch-icon.png',
		},
	},
	verification: {
		google: 'u8k11qOfcb8ezsXd-huKILV4GvBBQrKKEs_y0GVT8sY',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='nb'>
			<body className={`${rubik.className} antialiased items-center`}>
				<JsonLd data={localBusinessSchema} />
				<Navigation />

				<main className='w-full flex flex-col items-center'>
					{children}
				</main>

				<Footer />
			</body>
		</html>
	)
}
