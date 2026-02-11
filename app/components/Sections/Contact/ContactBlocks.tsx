import { Contact } from '@/app/contstants/contact'
import { Envelope, Handset, House } from '@gravity-ui/icons'
import Link from 'next/link'

const ContactBlocks = () => {
	return (
		<ul className='flex flex-col flex-wrap sm:flex-row pt-12 gap-4 md:gap-8 w-full text-left'>
			<li className='blureBox flex-1 rounded-2xl p-6 md:p-8 flex items-center gap-6'>
				<span className='min-w-14 w-14 sm:min-w-16 sm:w-16 aspect-square bg-lightGray flex justify-center items-center rounded-full text-black'>
					<Handset />
				</span>

				<div>
					<p className='text-xl !font-bold'>Phone number</p>
					<Link href={`phone:${Contact.phone}`}>{Contact.phone}</Link>
				</div>
			</li>

			<li className='blureBox flex-1 rounded-2xl p-6 md:p-8 flex items-center gap-6'>
				<span className='min-w-14 w-14 sm:min-w-16 sm:w-16 aspect-square bg-lightGray flex justify-center items-center rounded-full text-black'>
					<Envelope />
				</span>

				<div>
					<p className='text-xl !font-bold'>Email</p>
					<Link href={`mailto:${Contact.mail}`}>{Contact.mail}</Link>
				</div>
			</li>

			<li className='blureBox flex-1 rounded-2xl p-6 md:p-8 flex items-center gap-6'>
				<span className='min-w-14 w-14 sm:min-w-16 sm:w-16 aspect-square bg-lightGray flex justify-center items-center rounded-full text-black'>
					<House />
				</span>

				<div>
					<p className='text-xl !font-bold'>Email</p>
					<p>{Contact.address}</p>
				</div>
			</li>
		</ul>
	)
}

export default ContactBlocks
