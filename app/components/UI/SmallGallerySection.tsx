import GalleryGrid from './GalleryGrid'

const SmallGallerySection = ({
	images,
}: {
	images: { title: string; img: string }[]
}) => {
	return (
		<section>
			<div className='section-wrapper'>
				<h2>
					Eksempler på vårt{' '}
					<span className='text-darkGray'>arbeid</span>
				</h2>

				<GalleryGrid className='mt-10' images={images}></GalleryGrid>
			</div>
		</section>
	)
}

export default SmallGallerySection
