import Image from 'next/image'

const PageHeading = ({
	image,
	title,
	paragraph,
}: {
	image: string
	title: string
	paragraph?: string
}) => {
	return (
		<section className='relative text-white min-h-[65vh] flex items-center'>
			<Image
				src={image}
				alt={''}
				width={2000}
				height={1200}
				className='absolute inset-0 w-full h-full object-cover'
			/>
			<div className='absolute inset-0 w-full h-full bg-black/30'></div>

			<div className='section-wrapper relative text-center flex flex-col items-center pt-12'>
				<h1 className='max-w-4/5'>{title}</h1>
				{paragraph && (
					<p className='mt-8 !text-lg max-w-4/5'>{paragraph}</p>
				)}
			</div>
		</section>
	)
}

export default PageHeading
