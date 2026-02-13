import Link from 'next/link'

const MobileNavLink = ({
	text,
	link,
	selected,
}: {
	text: string
	link: string
	selected: boolean
}) => {
	return (
		<li
			className={`font-bold uppercase  hover:text-primary duration-200 w-fit py-2 ${selected ? 'text-primary' : 'text-white'}`}
		>
			<Link aria-label={text} className='py-2' href={link}>
				{text}
			</Link>
		</li>
	)
}

export default MobileNavLink
