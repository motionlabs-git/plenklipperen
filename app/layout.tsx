import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Navigation from './components/Layout/Navigation/Navigation'
import Footer from './components/Layout/Footer/Footer'

const rubik = Rubik({
	variable: '--font-rubik',
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://plenklipperen.no'),
	authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
	title: {
		default: `Plenklipperen - Hagevedlikehold og Snørydding i Bergen`,
		template: 'Plenklipperen - %s',
	},
	description:
		'Vi tilbyr profesjonell gressklipp, hagevedlikehold, trefelling og snørydding for private og bedrifter i Bergen. Rask respons og pålitelig service hele året.',
	keywords: '',
	twitter: {
		card: 'summary_large_image',
	},
	openGraph: {
		title: 'Plenklipperen - Hagevedlikehold og Snørydding i Bergen',
		description:
			'Vi tilbyr profesjonell gressklipp, hagevedlikehold, trefelling og snørydding for private og bedrifter i Bergen. Rask respons og pålitelig service hele året.',
		images: '/brand/open-graph.png',
	},
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/brand/favicon-dark.ico',
				href: '/brand/favicon-dark.ico',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/brand/favicon-light.ico',
				href: '/brand/favicon-light.ico',
			},
		],
		apple: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/brand/apple-touch-icon-dark.png',
				href: '/brand/apple-touch-icon-dark.png',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/brand/apple-touch-icon-light.png',
				href: '/brand/apple-touch-icon-light.png',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='no'>
			<body className={`${rubik.className} antialiased items-center`}>
				<Navigation />

				<main className='w-full flex flex-col items-center'>
					{children}
				</main>

				<Footer />
			</body>
		</html>
	)
}
