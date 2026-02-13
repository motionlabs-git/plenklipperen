import { QuoteOpen } from '@gravity-ui/icons'
import React from 'react'

const ReferenceCard = ({
	title,
	text,
	className,
}: {
	title: string
	text: string
	className: string
}) => {
	return (
		<div
			className={`relative bg-lightGray p-8 rounded-2xl w-full h-full shadow-2xs ${className}`}
		>
			<QuoteOpen
				className='absolute right-4 top-4 text-lightGrayAccent/60'
				width={70}
				height={70}
			/>

			<h3 className='relative'>{title}</h3>

			<p className='pt-4 italic realative'>{text}</p>
		</div>
	)
}

export default ReferenceCard
