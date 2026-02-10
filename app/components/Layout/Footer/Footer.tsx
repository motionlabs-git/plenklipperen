'use client'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from '../Navigation/NavLink'
import FooterLink from './FooterLink.'
import { Envelope, Handset, House } from '@gravity-ui/icons'
import Icon from '../../UI/Icon'
import { Facebook, Instagram } from 'feather-icons-react'
import { NavigationLinks } from '@/app/contstants/navigationLinks'
import { Contact } from '@/app/contstants/contact'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='flex justify-center px-4 bg-footerWhite'>
			<div className='w-full max-w-[var(--siteWidth)] py-12'>
				<div className='flex justify-between py-12 flex-col items-center gap-8 sm:flex-row'>
					<Link href={'/'}>
						<Image
							src={'/brand/logo.jpg'}
							alt={'Plenklipperen logo'}
							width={300}
							height={200}
							className='w-52'
						></Image>
					</Link>

					<ul className='flex flex-wrap gap-6 uppercase font-medium text-sm'>
						{NavigationLinks.map((item) => {
							return (
								<NavLink
									key={item.link}
									text={item.text}
									link={item.link}
								/>
							)
						})}
					</ul>
				</div>

				<div className='divider'></div>

				<div className='py-12 flex justify-between flex-col md:flex-row gap-8'>
					<ul className='flex sm:items-center gap-8 flex-wrap flex-col sm:flex-row items-start'>
						<li>
							<FooterLink
								title={'Phone'}
								text={Contact.phone}
								link={`phone:${Contact.phone}`}
								icon={<Handset />}
							/>
						</li>

						<li>
							<FooterLink
								title={'Email'}
								text={Contact.mail}
								link={`mailto:${Contact.mail}`}
								icon={<Envelope />}
							/>
						</li>
						<li>
							<FooterLink
								title={'Address'}
								text={Contact.address}
								link={Contact.addressLink}
								icon={<House />}
							/>
						</li>
					</ul>

					<ul className='flex items-center gap-8 '>
						<li>
							<Link target='_blank' href={Contact.fbLink}>
								<Icon className='hover:bg-primary'>
									<Facebook className='w-4'></Facebook>
								</Icon>
							</Link>
						</li>

						<li>
							<Link target='_blank' href={Contact.igLink}>
								<Icon className='hover:bg-primary'>
									<Instagram className='w-4'></Instagram>
								</Icon>
							</Link>
						</li>
					</ul>
				</div>

				<div className='divider'></div>

				<div className='py-6 flex justify-between flex-wrap'>
					<p className='text-darkGray text-sm'>
						&#169; {year === 2025 ? year : `2025 - ${year}`} | {''}
						<Link
							className='hover:text-primary'
							href={'/'}
							aria-label='Plenklipperen.no'
						>
							Plenklipperen.no
						</Link>
					</p>

					<p className='text-sm text-darkGray'>
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
