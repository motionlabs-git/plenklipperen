'use client'
import { useState } from 'react'
import GalleryImage from './GalleryImage'
import Image from 'next/image'
import Icon from '../../UI/Icon'
import { ChevronLeft, ChevronRight, Xmark } from '@gravity-ui/icons'

const gallery = [
	{
		img: '/images/bushes.jpg',
		title: 'Image ajsdl fasdljafsld lasd',
	},
	{
		img: '/images/okap.jpg',
		title: 'Image ajsdl fasdljafsld lasd',
	},
	{
		img: '/images/vinterford.jpg',
		title: 'Image ajsdl fasdljafsld lasd',
	},
	{
		img: '/images/stripes.jpg',
		title: 'Image ajsdl fasdljafsld lasd',
	},
]

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<null | number>(null)

	const nextImage = () => {
		if (selectedImage === gallery.length - 1) {
			setSelectedImage(0)
		} else setSelectedImage((prev) => prev + 1)
	}

	const prevImage = () => {
		if (selectedImage === 0) {
			setSelectedImage(gallery.length - 1)
		} else setSelectedImage((prev) => prev - 1)
	}

	return (
		<section>
			{selectedImage !== null && (
				<div className='fixed inset-0 w-screen h-dvh  bg-darkGreen/50 backdrop-blur-xs z-50 py-24 px-4 flex gap-4 items-center justify-center select-none'>
					<button
						onClick={prevImage}
						className='absolute z-50 left-6 md:left-0 md:relative'
					>
						<Icon className='cursor-pointer bg-primary hover:bg-primaryAccent duration-200'>
							<ChevronLeft />
						</Icon>
					</button>
					<div className='relative aspect-4/5 rounded-2xl overflow-hidden h-auto w-xl'>
						<button
							onClick={() => setSelectedImage(null)}
							className='absolute top-2 right-2'
						>
							<Icon className='cursor-pointer bg-primary hover:bg-primaryAccent duration-200'>
								<Xmark />
							</Icon>
						</button>

						<Image
							src={gallery[selectedImage].img}
							alt={'lasdkjflkdasfj'}
							width={1000}
							height={1000}
							className='w-full h-full object-cover'
						/>
					</div>

					<button
						className='absolute z-50 right-6 md:left-0 md:relative'
						onClick={nextImage}
					>
						<Icon className='cursor-pointer bg-primary hover:bg-primaryAccent duration-200'>
							<ChevronRight />
						</Icon>
					</button>
				</div>
			)}

			<div className='section-wrapper'>
				<div className='grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-3'>
					{gallery.map((img, i) => (
						<GalleryImage
							key={i}
							img={img.img}
							title={img.title}
							handleClick={() => setSelectedImage(i)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Gallery
