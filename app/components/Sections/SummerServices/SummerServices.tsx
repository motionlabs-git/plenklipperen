import SideImageBlock from '../../UI/SideImageBlock'

const SummerServices = () => {
	return (
		<section>
			<div className='section-wrapper flex flex-col gap-12 md:gap-24'>
				<SideImageBlock
					title={'Cutting'}
					id='grasscutting'
					text={'Text about cutting, things we do how it works'}
					image={'/images/Hero_image.jpg'}
					list={[
						'lasdkjfklasd',
						'lasdkjflkasdjl',
						'askldfjadklsjfklasd f',
					]}
				/>

				<SideImageBlock
					title={'Maintanance'}
					id='maintanance'
					text={'Text about maintanance, things we do how it works'}
					image={'/images/Hero_image.jpg'}
					list={[
						'lasdkjfklasd',
						'lasdkjflkasdjl',
						'askldfjadklsjfklasd f',
					]}
					reversed
				/>

				<SideImageBlock
					title={'Tree cutting'}
					text={'Text about tree cutting, things we do how it works'}
					image={'/images/Hero_image.jpg'}
					list={[
						'lasdkjfklasd',
						'lasdkjflkasdjl',
						'askldfjadklsjfklasd f',
					]}
				/>

				<SideImageBlock
					reversed
					title={'Adjustments repairs'}
					text={'Text about tree cutting, things we do how it works'}
					image={'/images/Hero_image.jpg'}
					list={[
						'lasdkjfklasd',
						'lasdkjflkasdjl',
						'askldfjadklsjfklasd f',
					]}
				/>
			</div>
		</section>
	)
}

export default SummerServices
