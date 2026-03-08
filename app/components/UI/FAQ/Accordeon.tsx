'use client'
import { useState } from 'react'
import AccordeonCard from './AccordeonCard'

const Accordeon = ({
	qaa,
}: {
	qaa: {
		q: string
		a: string
	}[]
}) => {
	const [selected, setSelected] = useState<string | null>()

	const select = (id: string) => {
		if (selected === null || selected !== id) {
			setSelected(id)
		} else {
			setSelected(null)
		}
	}

	return (
		<div className='w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:gap-8 xl:grid-cols-3 mt-8'>
			<div className='lg:flex-1'>
				{qaa.slice(0, 3).map((card, id) => (
					<AccordeonCard
						key={`1-${id}`}
						onClick={() => select(`1-${id}`)}
						isSelected={selected === `1-${id}`}
						q={card.q}
						a={card.a}
					/>
				))}
			</div>

			<div className='flex-1'>
				{qaa.slice(3, 6).map((card, id) => (
					<AccordeonCard
						key={`2-${id}`}
						onClick={() => select(`2-${id}`)}
						isSelected={selected === `2-${id}`}
						q={card.q}
						a={card.a}
					/>
				))}
			</div>

			<div className='flex-1'>
				{qaa.slice(6, 9).map((card, id) => (
					<AccordeonCard
						key={`3-${id}`}
						onClick={() => select(`3-${id}`)}
						isSelected={selected === `3-${id}`}
						q={card.q}
						a={card.a}
					/>
				))}
			</div>
		</div>
	)
}

export default Accordeon
