import Image from 'next/image'
import GreenButton from './GreenButton'
import { Check } from '@gravity-ui/icons'

const SideImageBlock = ({
	reversed,
	id,
	title,
	grayTitle,
	text,
	image,
	list,
	link,
}: {
	reversed?: boolean
	grayTitle?: string
	title: string
	id?: string
	text: string
	image: string
	list?: string[]
	link?: string
}) => {
	return (
		<div
			className={`relative flex gap-4 md:gap-8 ${reversed ? 'flex-col-reverse md:flex-row-reverse' : 'md:flex-row flex-col-reverse'}`}
		>
			<span
				id={id && id}
				className='absolute left-0 -top-32 invisible'
			></span>
			<div className='md:flex-1 rounded-2xl overflow-hidden'>
				<Image
					src={image}
					alt={'Plenklipperen image'}
					width={800}
					height={800}
					className='aspect-9/10 object-cover rounded-2xl'
				/>
			</div>

			<div className='md:flex-1'>
				<h3>
					{title}
					{grayTitle && (
						<span className='text-darkGray'> {grayTitle}</span>
					)}
				</h3>

				<p className='mt-8'>{text}</p>

				{list && (
					<ul className='mt-8 flex flex-col gap-3'>
						{list.map((item, i) => (
							<li key={i} className='flex gap-2 items-center'>
								<span className='aspect-square w-8 min-w-4 rounded-full bg-primary text-white flex justify-center items-center'>
									<Check />
								</span>
								<span className='font-bold'>{item}</span>
							</li>
						))}
					</ul>
				)}

				{link && (
					<GreenButton
						className='mt-8 pl-6 py-2 font-semibold'
						text='Read more about it'
						link={link}
					/>
				)}
			</div>
		</div>
	)
}

export default SideImageBlock
