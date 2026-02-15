import Image from 'next/image'
import GreenButton from './GreenButton'
import { Check } from '@gravity-ui/icons'

const SideImageBlock = ({
	reversed,
	id,
	title,
	grayTitle,
	texts,
	image,
	list,
	link,
}: {
	reversed?: boolean
	grayTitle?: string
	title: string
	id?: string
	texts: string[]
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

				{texts.map((text, i) => (
					<p key={i} className='mt-4 md:mt-8'>
						{text}
					</p>
				))}

				{list && (
					<ul className='mt-4 md:mt-8 flex flex-col gap-3'>
						{list.map((item, i) => (
							<li key={i} className='flex gap-2 items-center'>
								<span className='aspect-square w-6 min-w-6 sm:w-8 sm:min-w-8 rounded-full bg-primary text-white flex justify-center items-center'>
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
						text='Les mer'
						link={link}
					/>
				)}
			</div>
		</div>
	)
}

export default SideImageBlock
