import React, { useLayoutEffect, useRef, useState } from 'react'

const AccordeonCard = ({
	isSelected,
	onClick,
	q,
	a,
}: {
	isSelected: boolean
	onClick: () => void
	q: string
	a: string
}) => {
	const cardRef = useRef<null | HTMLDivElement>(null)

	const [height, setHeight] = useState<number>(0)
	const answerRef = useRef<null | HTMLParagraphElement>(null)

	useLayoutEffect(() => {
		if (answerRef.current) {
			setHeight(answerRef.current.clientHeight)
		}
	}, [])

	return (
		<div
			ref={cardRef}
			onClick={onClick}
			style={{
				height: isSelected ? `calc(7rem + ${height}px)` : '3rem',
			}}
			className='group mt-4 w-full cursor-pointer overflow-hidden duration-200 '
		>
			<div className='flex gap-4 justify-between items-center '>
				<span className='font-bold group-hover:text-primary duration-200 min-h-[2.8em]'>
					{q}
				</span>
				<div className='relative flex items-center min-w-3 w-3'>
					<div className='w-full h-0.5 bg-black group-hover:bg-primary duration-200 rounded-full'></div>

					<div
						className={`absolute w-full h-0.5 bg-black group-hover:bg-primary duration-200 rounded-full ${
							isSelected ? 'rotate-0' : 'rotate-90'
						}`}
					></div>
				</div>
			</div>

			<p className='' ref={answerRef}>
				{a}
			</p>
		</div>
	)
}

export default AccordeonCard
