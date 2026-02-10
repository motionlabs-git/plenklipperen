import Link from 'next/link'
import Icon from '../../UI/Icon'

const FooterLink = ({
	title,
	text,
	link,
	icon,
}: {
	title: string
	text: string
	link: string
	icon: React.JSX.Element
}) => {
	return (
		<Link
			target='_blank'
			href={link}
			className='group flex items-center gap-6 group'
		>
			<Icon className='group-hover:bg-primary'>{icon}</Icon>

			<div className='flex flex-col leading-6'>
				<p className='!font-bold'> {title}</p>
				<p className='!text-sm group-hover:text-primary duration-200'>
					{text}
				</p>
			</div>
		</Link>
	)
}

export default FooterLink
