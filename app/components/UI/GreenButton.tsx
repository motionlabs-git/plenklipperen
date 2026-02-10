import { ChevronRight } from '@gravity-ui/icons'
import Link from 'next/link'

const GreenButton = ({
	text,
	className,
	link,
}: {
	text: string
	className?: string
	link: string
}) => {
	return (
		<Link
			href={link}
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
