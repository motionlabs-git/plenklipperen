'use client'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from '../Navigation/NavLink'
import FooterLink from './FooterLink.'
import { Envelope, Handset, House } from '@gravity-ui/icons'
import Icon from '../../UI/Icon'
import { Facebook, Instagram } from 'feather-icons-react'
import {
	CityPartLinks,
	NavigationLinks,
} from '@/app/contstants/navigationLinks'
import { Contact } from '@/app/contstants/contact'
import { usePathname } from 'next/navigation'

const Footer = () => {
	const year = new Date().getFullYear()
	const path = usePathname()

	return (
		<footer className='flex justify-center px-4 bg-footerWhite'>
			<div className='w-full max-w-[var(--siteWidth)] py-12'>
				<div className='flex justify-between py-12 flex-col  gap-8 sm:flex-row'>
					<div>
						<Link aria-label='Plenklipperen logo' href={'/'}>
							<Image
								src={'/brand/logo.jpg'}
								alt={'Plenklipperen logo'}
								width={300}
								height={200}
								className='w-52'
							></Image>
						</Link>

						<p className='mt-4'>
							<Link
								href={'/'}
								className='hover:text-primary duration-200'
							>
								Plenklipperen.no AS
							</Link>{' '}
							- Vi klipper plen!
						</p>

						<Link
							aria-label='Vaktmester Bergen logo'
							href={'https://www.vaktmesterbergen.no'}
							className='mt-10 block'
						>
							<Image
								src={'/brand/vaktmester-logo.png'}
								alt={'Vaktmester Bergen logo'}
								width={300}
								height={200}
								className='w-52'
							></Image>
						</Link>

						<p className='mt-4'>
							<Link
								aria-label='Vaktmester Bergen'
								href={'https://www.vaktmesterbergen.no'}
								target='_blank'
								className='hover:text-primary duration-200'
							>
								Vaktmester Bergen
							</Link>{' '}
							- Renhold og Vedlikehold av Bygg
						</p>
					</div>

					<div className='flex flex-col sm:flex-row gap-10'>
						<div>
							<h4>Meny</h4>
							<ul className='mt-2 flex flex-col gap-2 uppercase font-medium text-sm'>
								{NavigationLinks.map((item) => {
									return (
										<NavLink
											key={item.link}
											text={item.text}
											link={item.link}
											path={path}
										/>
									)
								})}
							</ul>
						</div>

						<div>
							<h4>Område</h4>
							<ul className='mt-2 flex flex-col gap-2 uppercase font-medium text-sm'>
								{CityPartLinks.map((item) => {
									return (
										<NavLink
											key={item.link}
											text={item.text}
											link={item.link}
											path={path}
										/>
									)
								})}
							</ul>
						</div>
					</div>
				</div>

				<div className='divider'></div>

				<div className='py-12 flex justify-between flex-col md:flex-row gap-8'>
					<ul className='flex sm:items-center gap-4 md:gap-8 flex-wrap flex-col sm:flex-row items-start'>
						<li>
							<FooterLink
								title={'Telefon'}
								text={Contact.phone}
								link={`phone:${Contact.phone}`}
								icon={<Handset />}
							/>
						</li>

						<li>
							<FooterLink
								title={'E-post'}
								text={Contact.mail}
								link={`mailto:${Contact.mail}`}
								icon={<Envelope />}
							/>
						</li>
						<li>
							<FooterLink
								title={'Adresse'}
								text={Contact.address}
								link={Contact.addressLink}
								icon={<House />}
							/>
						</li>
					</ul>

					<ul className='flex items-center gap-4 md:gap-8'>
						<li>
							<Link
								aria-label='Plenklipperen facebook link'
								target='_blank'
								href={Contact.fbLink}
							>
								<Icon className='hover:bg-primary'>
									<Facebook className='w-4'></Facebook>
								</Icon>
							</Link>
						</li>

						<li>
							<Link
								aria-label='Plenklipperen instagram link'
								target='_blank'
								href={Contact.igLink}
							>
								<Icon className='hover:bg-primary'>
									<Instagram className='w-4'></Instagram>
								</Icon>
							</Link>
						</li>
					</ul>
				</div>

				<div className='divider'></div>

				<div className='py-6 flex justify-between flex-wrap'>
					<p className='text-darkGray !text-sm'>
						&#169; {year === 2025 ? year : `2025 - ${year}`} | {''}
						<Link
							className='hover:text-primary'
							href={'/'}
							aria-label='Plenklipperen.no'
						>
							Plenklipperen.no
						</Link>
					</p>

					<p className='!text-sm text-darkGray'>
						This website was created by
						<Link
							target='_blank'
							href={'https://motionlabs.cz/'}
							className='ml-1 hover:text-primary'
							aria-label='MotionLabs link'
						>
							<Image
								src={'/ml_logo.svg'}
								alt={'MotionLabs logo'}
								width={100}
								height={100}
								className='inline w-6 pb-1'
							/>{' '}
							MotionLabs
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
