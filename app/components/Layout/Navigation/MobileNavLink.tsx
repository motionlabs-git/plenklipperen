import Link from 'next/link'

const MobileNavLink = ({ text, link }: { text: string; link: string }) => {
	return (
		<li className='font-bold uppercase text-white hover:text-primary duration-200 w-fit py-2'>
			<Link className='py-2' href={link}>
				{text}
			</Link>
		</li>
	)
}

export default MobileNavLink
