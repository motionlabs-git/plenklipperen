import { ChevronRight } from '@gravity-ui/icons'
import Link from 'next/link'

const GreenButton = ({
	text,
	className,
	link,
	blank,
}: {
	text: string
	className?: string
	link: string
	blank?: boolean
}) => {
	return (
		<Link
			href={link}
			target={blank ? '_blank' : '_self'}
			aria-label={text}
			className={`p-2 bg-primary rounded-full flex items-center gap-4 hover:bg-primaryAccent duration-200 cursor-pointer shadow-sm select-none w-fit ${className}`}
		>
			<span className='text-white text-[1em] text-nowrap whitespace-nowrap'>
				{text}
			</span>

			<span className='aspect-square bg-white rounded-full w-[1.9em] flex items-center justify-center'>
				<ChevronRight
					className='text-primary'
					width={15}
				></ChevronRight>
			</span>
		</Link>
	)
}

export default GreenButton
