import SideImageBlock from '../../UI/SideImageBlock'

const SummerServices = () => {
	return (
		<section>
			<div className='section-wrapper flex flex-col gap-12 md:gap-24'>
				<SideImageBlock
					title={'Plenhold'}
					id='plenhold'
					text={
						'Vi tilbyr både regelmessig og engangs gressklipp for private boliger, bedrifter og større eiendommer. Vi sørger for et jevnt og pent resultat, kantklipping og opprydding etter arbeidet. Plenen din holder seg velstelt gjennom hele sesongen.'
					}
					image={'/images/Hero_image.jpg'}
					list={[
						'lasdkjfklasd',
						'lasdkjflkasdjl',
						'askldfjadklsjfklasd f',
					]}
				/>

				<SideImageBlock
					title={'Hagevedlikehold'}
					id='hagevedlikehold'
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
					title={'Trefelling'}
					id='trefelling'
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
