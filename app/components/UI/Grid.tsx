import React from 'react'
import GridCell from './GridCell'
import { AlertCircle } from 'feather-icons-react'

const Grid = ({
	className,
	grid,
}: {
	className?: string
	grid: { icon: React.JSX.Element; title: string; subTitle: string }[]
}) => {
	//TODO: grid table stroke

	return (
		<div
			className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
		>
			{grid.map((cell, i) => (
				<GridCell
					key={i}
					title={cell.title}
					subtitle={cell.subTitle}
					icon={cell.icon}
				/>
			))}
		</div>
	)
}

export default Grid
