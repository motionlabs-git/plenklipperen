import Link from 'next/link'
import GreenButton from '../../UI/GreenButton'
import MobileNavLink from './MobileNavLink'
import Icon from '../../UI/Icon'
import { Facebook, Instagram } from 'feather-icons-react'
import { RefObject } from 'react'
import { NavigationLinks } from '@/app/contstants/navigationLinks'
import { Contact } from '@/app/contstants/contact'

const MobileNavigation = ({
	handleClose,
	ref,
	path,
}: {
	handleClose: () => void
	ref: RefObject<HTMLElement | null>
	path: string
}) => {
	return (
		<nav
			ref={ref}
			id='mobileNavigation'
			className='fixed w-screen h-[100dvh] inset-0 py-4 sm:py-8 px-4 opacity-0 flex md:hidden justify-end'
		>
			<div className='w-full h-full absolute inset-0 bg-darkGreen/50'></div>

			<div className='relative bg-darkGreen h-full rounded-3xl w-full sm:w-2/3 p-8 flex flex-col justify-between '>
				<div className='flex flex-col gap-8'>
					<button
						aria-label='Close mobile navigation'
						onClick={handleClose}
						className='w-fit aspect-square relative flex justify-center items-center cursor-pointer self-end hover:rotate-90 duration-200 p-1'
					>
						<div className='bg-white h-0.5 w-5 rounded-full rotate-45'></div>
						<div className='absolute bg-white h-0.5 w-5 rounded-full -rotate-45'></div>
					</button>

					<ul className='mt-'>
						{NavigationLinks.slice(0, -1).map((item) => {
							return (
								<MobileNavLink
									key={item.link}
									text={item.text}
									link={item.link}
									selected={item.link === path}
								/>
							)
						})}
					</ul>

					<GreenButton
						link='/contact'
						text={'Contact us'}
						className='text-sm pl-4 font-semibold'
					/>
				</div>

				<ul className=' flex items-center gap-4'>
					<li>
						<Link
							aria-label='Plenklipperen facebook link'
							target='_blank'
							href={Contact.fbLink}
						>
							<Icon className='hover:bg-primary bg-white group'>
								<Facebook className='w-4 text-black group-hover:text-white duration-200'></Facebook>
							</Icon>
						</Link>
					</li>

					<li>
						<Link
							aria-label='Plenklipperen instagram link'
							target='_blank'
							href={Contact.igLink}
						>
							<Icon className='hover:bg-primary bg-white group'>
								<Instagram className='w-4 text-black group-hover:text-white duration-200'></Instagram>
							</Icon>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default MobileNavigation
