import Icon from '@/app/components/UI/Icon'
import { ChevronRight } from 'feather-icons-react'
import Link from 'next/link'
import Image from 'next/image'

const ServiceCard = () => {
	return (
		<Link
			href={'/'}
			className='rounded-2xl shadow-2xs bg-lightGray flex-1 p-6 hover:bg-lightGrayAccent duration-200'
		>
			<div className='flex justify-between'>
				<h3>Služba 1</h3>
				<Icon className='bg-black hover:bg-primary'>
					<ChevronRight />
				</Icon>
			</div>
			<p className='mt-4'>
				Malesuada ante porttitor auctor venenatis augue quam consectetur
				massa.
			</p>

			<Image
				src={'/images/Hero_image.jpg'}
				alt={'asdfaf'}
				width={500}
				height={500}
				className='w-full rounded-xl mt-4 aspect-square object-cover'
			/>
		</Link>
	)
}

export default ServiceCard
