import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronDown } from '@gravity-ui/icons'
import SubmenuItem from './SubmenuItem'
import { ServicesLinks } from '@/app/contstants/navigationLinks'

const NavLinkWithSubmenu = ({
	text,
	link,
	path,
}: {
	text: string
	link: string
	path: string
}) => {
	const [isSubmenu, setIsSubmenu] = useState(false)

	return (
		<li
			className={`hover:text-primary ${path === link ? 'text-primary' : 'text-black'} duration-200 h-full `}
			onMouseLeave={() => setIsSubmenu(false)}
		>
			<Link
				aria-label={text}
				className='h-full flex items-center gap-1'
				href={link}
				onMouseEnter={() => setIsSubmenu(true)}
			>
				{text}

				<ChevronDown />
			</Link>

			<div
				id='navSubmenu'
				className={`absolute left-0 w-full px-4 flex justify-center ${isSubmenu && 'show'}`}
			>
				<div
					className='pt-2 w-full duration-200 max-w-[1290px] rounded-b-3xl'
					onMouseLeave={() => setIsSubmenu(false)}
				>
					<div className='bg-white w-full rounded-3xl flex gap-4 p-4'>
						{ServicesLinks.map((service) => (
							<SubmenuItem
								key={service.link}
								title={service.title}
								text={service.subTitle}
								image={service.image}
								link={service.link}
							/>
						))}
					</div>
				</div>
			</div>
		</li>
	)
}

export default NavLinkWithSubmenu
