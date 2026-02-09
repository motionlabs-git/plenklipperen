import React from 'react'
import Image from 'next/image'

const ImageBox = ({
	className,
	img,
	text,
}: {
	className?: string
	img: string
	text: string
}) => {
	return (
		<div
			className={`group relative rounded-2xl overflow-hidden ${className}`}
		>
			<Image
				src={img}
				width={800}
				height={800}
				alt={'Plenklipperen work image'}
				className=' group-hover:scale-105 duration-200 select-none w-full h-full object-cover'
			/>

			<div className='absolute bottom-0 w-full left-0 p-2 rounded-xl overflow-hidden '>
				<div className='blureBox rounded-xl text-white font-medium text-sm p-2 w-full'>
					<article className='select-auto'>{text}</article>
				</div>
			</div>
		</div>
	)
}

export default ImageBox
