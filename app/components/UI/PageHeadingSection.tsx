import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '../SEO/JsonLd'
import { Breadcrumb, breadcrumbSchema } from '@/app/lib/seo'

const PageHeading = ({
	image,
	title,
	paragraph,
	breadcrumbs,
}: {
	image: string
	title: string
	paragraph?: string
	breadcrumbs?: Breadcrumb[]
}) => {
	return (
		<section className='relative text-white min-h-[65vh] flex items-center'>
			<Image
				src={image}
				alt={''}
				width={2000}
				height={1200}
				sizes='100vw'
				preload
				className='absolute inset-0 w-full h-full object-cover'
			/>
			<div className='absolute inset-0 w-full h-full bg-black/30'></div>

			<div className='section-wrapper relative text-center flex flex-col items-center pt-12'>
				{breadcrumbs && (
					<>
						<JsonLd data={breadcrumbSchema(breadcrumbs)} />
						<nav aria-label='Brødsmulesti' className='mb-6'>
							<ol className='flex flex-wrap justify-center gap-2 text-sm text-white/80'>
								{[{ name: 'Hjem', path: '/' }, ...breadcrumbs].map(
									(item, i, all) => (
										<li key={item.path} className='flex gap-2'>
											{i < all.length - 1 ? (
												<>
													<Link
														href={item.path}
														className='hover:text-white duration-200'
													>
														{item.name}
													</Link>
													<span aria-hidden>/</span>
												</>
											) : (
												<span aria-current='page'>
													{item.name}
												</span>
											)}
										</li>
									)
								)}
							</ol>
						</nav>
					</>
				)}

				<h1 className='max-w-4/5'>{title}</h1>
				{paragraph && (
					<p className='mt-8 !text-lg max-w-4/5'>{paragraph}</p>
				)}
			</div>
		</section>
	)
}

export default PageHeading
