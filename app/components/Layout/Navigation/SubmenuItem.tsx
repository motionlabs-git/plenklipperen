import Image from 'next/image'
import Link from 'next/link'
import ChevronRight from '../../UI/ChevronRight'

const SubmenuItem = ({
	title,
	text,
	image,
	link,
}: {
	title: string
	text: string
	image: string
	link: string
}) => {
	return (
		<Link
			aria-label={text}
			href={link}
			className='relative bg-lightGray rounded-2xl shadow-xs w-full aspect-square hover:bg-lightGrayAccent duration-200 p-4 text-black normal-case flex flex-col'
		>
			<span className='text-lg'>{title}</span>

			<p className=' text-darkGray '>{text}</p>

			<div className='relative w-full h-full flex-1 bg-darkGray rounded-2xl mt-4 overflow-hidden'>
				<Image
					src={image}
					alt={'Submenu image'}
					width={500}
					height={500}
					className='w-full h-full object-cover '
				/>

				<div className='absolute inset-0 bg-black/10'></div>

				<ChevronRight className='text-white bg-primary hover:bg-primaryAccent' />
			</div>
		</Link>
	)
}

export default SubmenuItem
