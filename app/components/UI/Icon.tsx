import React from 'react'

const Icon = ({
	children,
	className,
}: {
	children: React.JSX.Element
	className?: string
}) => {
	return (
		<div
			className={`min-w-10 w-10 text-white bg-black rounded-full aspect-square flex items-center justify-center duration-200 ${className}`}
		>
			{children}
		</div>
	)
}

export default Icon
