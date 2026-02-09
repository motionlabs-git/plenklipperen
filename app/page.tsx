import Hero from './components/Sections/Mainpage/Hero'
import OurWork from './components/Sections/Mainpage/OurWork/OurWork'

import Services from './components/Sections/Mainpage/Services/Services'
import SideImageBlock from './components/UI/SideImageBlock'

export default function Home() {
	return (
		<>
			<Hero />
			<OurWork />
			<Services />

			<section>
				<div className='section-wrapper flex flex-col gap-24'>
					<SideImageBlock
						text='alskjdf lasdjfl ajsdlkfj lasdjf lajsdlf '
						title='klasjdfl j alksdjf lasdjlf adjs asdlk f'
					/>
					<SideImageBlock
						reversed
						text='alskjdf lasdjfl ajsdlkfj lasdjf lajsdlf '
						title='klasjdfl j alksdjf lasdjlf adjs asdlk f'
					/>
				</div>
			</section>
		</>
	)
}
