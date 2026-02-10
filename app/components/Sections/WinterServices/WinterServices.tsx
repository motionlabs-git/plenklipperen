import SideImageBlock from '../../UI/SideImageBlock'

const WinterServices = () => {
	return (
		<section>
			<div className='section-wrapper flex flex-col gap-12 md:gap-24'>
				<SideImageBlock
					title={'Snow plowing'}
					text={'Text about cutting, things we do how it works'}
					image={'/images/vinterford.jpg'}
					list={[
						'lasdkjfklasd',
						'lasdkjflkasdjl',
						'askldfjadklsjfklasd f',
					]}
				/>

				<SideImageBlock
					title={'Salting'}
					text={'Text about maintanance, things we do how it works'}
					image={'/images/vinterr.jpg'}
					list={[
						'lasdkjfklasd',
						'lasdkjflkasdjl',
						'askldfjadklsjfklasd f',
					]}
					reversed
				/>
			</div>
		</section>
	)
}

export default WinterServices
