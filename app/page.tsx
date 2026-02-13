import References from './components/Layout/Footer/References'
import Hero from './components/Sections/Mainpage/Hero'
import OurWork from './components/Sections/Mainpage/OurWork/OurWork'

import Services from './components/Sections/Mainpage/Services/Services'
import SideImageBlock from './components/UI/SideImageBlock'

export default function Home() {
	return (
		<>
			<Hero />
			<OurWork />
			<span className='divider'></span>
			<Services />
			<span className='divider'></span>
			<section>
				<div className='section-wrapper flex flex-col gap-12 md:gap-24'>
					<SideImageBlock
						text='alskjdf lasdjfl ajsdlkfj lasdjf lajsdlf '
						title='Sommer­tjenester'
						image='/images/Hero_image.jpg'
						list={[
							'lasdkjfklasd',
							'lasdkjflkasdjl',
							'askldfjadklsjfklasd f',
						]}
						link='/services'
					/>
					<SideImageBlock
						reversed
						text='alskjdf lasdjfl ajsdlkfj lasdjf lajsdlf '
						title='Winter service text'
						image='/images/vinterford.jpg'
						list={[
							'lasdkjfklasd',
							'lasdkjflkasdjl',
							'askldfjadklsjfklasd f',
						]}
						link='/winter-services'
					/>
				</div>
			</section>
			<References />
		</>
	)
}
