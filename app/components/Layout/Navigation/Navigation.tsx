'use client'
import Image from 'next/image'
import Link from 'next/link'
import GreenButton from '../../UI/GreenButton'
import NavLink from './NavLink'
import NavLinkWithSubmenu from './NavLinkWithSubmenu'
import Hamburger from './Hamburger'
import { useRef, useState } from 'react'
import MobileNavigation from './MobileNavigation'
import { NavigationLinks } from '@/app/contstants/navigationLinks'

const Navigation = () => {
	const [mobileNavigation, setMobileNavigation] = useState(false)
	const mobileNavRef = useRef<null | HTMLElement>(null)

	const openMobileMenu = () => {
		setMobileNavigation(true)

		setTimeout(() => {
			mobileNavRef.current?.classList.add('show')
			document.body.classList.add('deny-scroll')
		}, 10)
	}

	const closeMobileMenu = () => {
		mobileNavRef.current?.classList.remove('show')
		document.body.classList.remove('deny-scroll')

		setTimeout(() => {
			setMobileNavigation(false)
		}, 250)
	}

	return (
		<nav className='w-full fixed z-50 top-0 left-0 pt-8 px-4 flex flex-col items-center'>
			<div className='bg-white h-18 shadow-md rounded-full px-4 flex justify-between items-center gap-2 w-full max-w-[1290px]'>
				<Link href={'/'}>
					<Image
						src={'/brand/logo.jpg'}
						alt={'Plenklipperen logo'}
						width={300}
						height={200}
						className='w-40'
					></Image>
				</Link>

				<ul className=' gap-4 lg:gap-6 uppercase font-medium text-sm h-full hidden md:flex'>
					{NavigationLinks.slice(0, -1).map((item) => {
						return item.subLinks ? (
							<NavLinkWithSubmenu
								text={item.text}
								link={item.link}
								key={item.link}
							/>
						) : (
							<NavLink
								key={item.link}
								text={item.text}
								link={item.link}
							/>
						)
					})}

					{/* <NavLink text='Winter' link='/' />
					<NavLink text='Prices' link='/' />
					<NavLink text='Gallery' link='/' /> */}
				</ul>

				<div className='flex items-center'>
					<Hamburger handleClick={openMobileMenu} />
					<GreenButton
						text={'Contact us'}
						className='text-sm pl-4 font-semibold hidden md:flex'
					/>
				</div>
			</div>

			{mobileNavigation && (
				<MobileNavigation
					ref={mobileNavRef}
					isOpened={mobileNavigation}
					handleClose={closeMobileMenu}
				/>
			)}
		</nav>
	)
}

export default Navigation
