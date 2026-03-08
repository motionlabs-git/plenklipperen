import React from 'react'

const GridCell = ({
	icon,
	title,
	subtitle,
}: {
	icon?: React.JSX.Element
	title: string
	subtitle: string
}) => {
	return (
		<div className='flex flex-col items-center p-4 md:p-10 bg-lightGray hover:bg-lightGrayAccent rounded-2xl text-black/70 hover:text-black duration-200 '>
			<span className='text-3xl'>{icon && icon}</span>

			<h4 className='mt-2 text-center'>{title}</h4>
			<p className='mt-2 text-center'>{subtitle}</p>
		</div>
	)
}

export default GridCell
