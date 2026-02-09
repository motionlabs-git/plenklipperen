import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ text, link }: { text: string; link: string }) => {
	// const path = usePathname()

	return (
		<li className='hover:text-primary duration-200 h-full'>
			<Link
				className='h-full flex items-center gap-1 text-nowrap whitespace-nowrap'
				href={link}
			>
				{text}
			</Link>
		</li>
	)
}

export default NavLink
