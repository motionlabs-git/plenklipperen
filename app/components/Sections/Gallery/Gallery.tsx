'use client'
import { useState } from 'react'
import GalleryImage from './GalleryImage'
import Image from 'next/image'
import Icon from '../../UI/Icon'
import { ChevronLeft, ChevronRight, Xmark } from '@gravity-ui/icons'

const gallery = [
	{
		img: '/images/gallery/plenklipperen1.jpg',
		title: 'Gressklipping i Bergen – velstelt plen etter profesjonell klipp',
	},
	{
		img: '/images/gallery/plenklipperen2.jpg',
		title: 'Profesjonell plenklipping i Bergen for private eiendommer',
	},
	{
		img: '/images/gallery/plenklipperen3.jpg',
		title: 'Hagevedlikehold i Bergen – perfekt klippet gress',
	},
	{
		img: '/images/gallery/plenklipperen4.jpg',
		title: 'Plenservice i Bergen med jevnt og tett resultat',
	},
	{
		img: '/images/gallery/plenklipperen5.jpeg',
		title: 'Gressklipping og kantklipp i Bergen – profesjonelt utført',
	},
	{
		img: '/images/gallery/plenklipperen6.jpeg',
		title: 'Vedlikehold av hage og plen i Bergen gjennom sesongen',
	},
	{
		img: '/images/gallery/plenklipperen7.jpeg',
		title: 'Nylig klippet plen i Bergen med synlige striper',
	},
	{
		img: '/images/gallery/plenklipperen8.jpg',
		title: 'Hagearbeid i Bergen – kvalitet og presisjon i hver detalj',
	},
	{
		img: '/images/gallery/plenklipperen9.jpg',
		title: 'Profesjonell plenklipper tjeneste i Bergen',
	},
	{
		img: '/images/gallery/plenklipperen10.jpg',
		title: 'Pent vedlikeholdt uteområde etter gressklipping i Bergen',
	},
	{
		img: '/images/gallery/plenklipperen11.jpg',
		title: 'Resultat etter hagevedlikehold og plenklipp i Bergen',
	},
	{
		img: '/images/gallery/plenklipperen12.jpg',
		title: 'Ekspert gressklipping i Bergen for boliger og bedrifter',
	},
]

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<null | number>(null)

	const nextImage = () => {
		setSelectedImage((prev) =>
			prev !== null ? (prev + 1) % gallery.length : null
		)
	}

	const prevImage = () => {
		setSelectedImage((prev) =>
			prev !== null ? (prev - 1 + gallery.length) % gallery.length : null
		)
	}

	return (
		<section>
			{selectedImage !== null && (
				<div className='fixed inset-0 w-screen h-dvh  bg-darkGreen/50 backdrop-blur-xs z-50 py-24 px-4 flex gap-4 items-center justify-center select-none'>
					<button
						aria-label='Previous image'
						onClick={prevImage}
						className='absolute z-50 left-6 md:left-0 md:relative'
					>
						<Icon className='cursor-pointer bg-primary hover:bg-primaryAccent duration-200'>
							<ChevronLeft />
						</Icon>
					</button>
					<div className='relative aspect-4/5 rounded-2xl overflow-hidden h-auto w-xl'>
						<button
							aria-label='Close gallery image'
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
						aria-label='Next image'
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
