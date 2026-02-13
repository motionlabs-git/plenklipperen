import { Metadata } from 'next'
import GreenButton from './components/UI/GreenButton'

export const metadata: Metadata = {
	title: `Oi! Denne siden ble ikke funnet`,
	description: '',
	keywords: '',
	authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
	twitter: {
		card: 'summary_large_image',
	},
	openGraph: {
		title: 'Plenklipperen - Hagevedlikehold og Snørydding i Bergen',
		description: '',
		images: '/brand/open-graph.png',
	},
	robots: {
		index: false,
		follow: false,
	},
}

const PageNotFound = () => {
	return (
		<section className='min-h-[80vh] flex flex-col items-center justify-center'>
			<div className='section-wrapper flex flex-col items-center'>
				<h1 className='text-center text-primary'>Feil 404</h1>
				<h2 className='text-center'>
					Oi! Denne siden ble ikke funnet.
				</h2>
				<p className='mt-4'>
					Beklager, men siden du leter etter ble ikke funnet.
				</p>

				<GreenButton
					text={'Retur hjem'}
					link={'/'}
					className='text-lg font-bold pl-6 mt-8'
				/>
			</div>
		</section>
	)
}

export default PageNotFound
