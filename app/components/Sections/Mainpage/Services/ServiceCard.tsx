import Icon from '@/app/components/UI/Icon'
import { ChevronRight } from 'feather-icons-react'
import Link from 'next/link'
import Image from 'next/image'

const ServiceCard = ({
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
			href={link}
			className='rounded-2xl shadow-2xs bg-lightGray flex-1 p-6 hover:bg-lightGrayAccent duration-200'
		>
			<div className='flex gap-2 justify-between'>
				<h3 className='text-wrap whitespace-break-spaces wrap-anywhere'>
					{title}
				</h3>
				<Icon className='bg-black hover:bg-primary'>
					<ChevronRight />
				</Icon>
			</div>
			<p className='mt-4'>{text}</p>

			<Image
				src={image}
				alt={title}
				width={500}
				height={500}
				className='w-full rounded-xl mt-4 aspect-video object-cover'
			/>
		</Link>
	)
}

export default ServiceCard
