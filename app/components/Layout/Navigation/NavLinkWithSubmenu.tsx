import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ChevronDown } from '@gravity-ui/icons'
import SubmenuItem from './SubmenuItem'
import { ServicesLinks } from '@/app/contstants/navigationLinks'
import GreenButton from '../../UI/GreenButton'

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

	useEffect(() => {
		setIsSubmenu(false)
	}, [path])

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
					<div className='bg-white w-full rounded-3xl shadow-2xl p-4'>
						<div className='flex gap-4'>
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

						<div className='mt-6 text-black'>
							<h4>Komplett service for eiendommer i Bergen</h4>

							<p className='!text-base mt-2 normal-case'>
								Vi tilbyr også vaktmestertjenester, renhold og
								teknisk vedlikehold av bygg gjennom vårt
								samarbeidende selskap. Perfekt for borettslag,
								bedrifter og eiendomseiere som ønsker én
								leverandør for alt vedlikehold.
							</p>

							<GreenButton
								text={'Se våre vaktmestertjenester'}
								link={'https://www.vaktmesterbergen.no'}
								className='text-sm font-bold pl-6 mt-4'
								blank
							/>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}

export default NavLinkWithSubmenu
