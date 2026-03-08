import Image from 'next/image'

const GalleryGrid = ({
	className,
	images,
}: {
	className?: string
	images: { title: string; img: string }[]
}) => {
	return (
		<div
			className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
		>
			{images.map((img, i) => (
				<div
					key={i}
					className='aspect-square rounded-2xl overflow-hidden'
				>
					<Image
						src={img.img}
						alt={img.title}
						width={400}
						height={400}
						className='w-full h-full object-cover overflow-hidden hover:scale-105 duration-200'
					/>
				</div>
			))}
		</div>
	)
}

export default GalleryGrid
