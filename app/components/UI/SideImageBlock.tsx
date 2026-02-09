import Image from 'next/image'

const SideImageBlock = ({
	reversed,
	title,
	text,
}: {
	reversed?: boolean
	title: string
	text: string
}) => {
	return (
		<div
			className={`flex gap-8 ${reversed ? 'flex-row-reverse' : 'flex-row'}`}
		>
			<div className='flex-1 rounded-2xl overflow-hidden'>
				<Image
					src={'/images/Hero_image.jpg'}
					alt={'Plenklipperen image'}
					width={800}
					height={800}
					className='aspect-9/10 object-cover'
				/>
			</div>

			<div className='flex-1'>
				<h3>
					alsdfj aldflka jsldjf lasdlf asl
					<span className='text-darkGray'>
						{' '}
						aklsdjfalksdjf asjdkf lkasd
					</span>
				</h3>
			</div>
		</div>
	)
}

export default SideImageBlock
