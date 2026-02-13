import Link from 'next/link'

const NavLink = ({
	text,
	link,
	path,
}: {
	text: string
	link: string
	path: string
}) => {
	return (
		<li
			className={`hover:text-primary duration-200 h-full ${path === link ? 'text-primary' : 'text-black'}`}
		>
			<Link
				aria-label={text}
				className='h-full flex items-center gap-1 text-nowrap whitespace-nowrap'
				href={link}
			>
				{text}
			</Link>
		</li>
	)
}

export default NavLink
