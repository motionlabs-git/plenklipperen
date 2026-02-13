import { Metadata } from 'next'
import References from '../components/Layout/Footer/References'
import Hero from '../components/Sections/About/Hero'

export const metadata: Metadata = {
	title: `Om oss`,
	description: '',
}

const page = () => {
	return (
		<>
			<Hero />

			<span className='divider'></span>

			<References />
		</>
	)
}

export default page
