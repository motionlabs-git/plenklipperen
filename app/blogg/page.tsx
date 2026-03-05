import { Metadata } from 'next'
import Image from 'next/image'
import PageHeadingSection from '../components/UI/PageHeadingSection'
import { Posts } from './posts'
import Link from 'next/link'
import { ChevronRight } from 'feather-icons-react'

export const metadata: Metadata = {
	title: 'Blogg | Plenklipping og hagearbeid i Bergen',
	description:
		'Les nyttige artikler om plenklipping, hagearbeid og vedlikehold av uteområder i Bergen. Tips, guider og råd fra profesjonelle fagfolk.',
	keywords: [
		'plenklipping bergen',
		'hagearbeid bergen',
		'gressklipping bergen',
		'vedlikehold av hage',
		'uteområde bergen',
		'plen tips',
	],
	openGraph: {
		title: 'Blogg | Plenklipping og hagearbeid i Bergen',
		description:
			'Tips og guider om plenklipping, hagearbeid og vedlikehold av uteområder i Bergen.',
		url: 'https://plenklipperen.no/blogg',
		siteName: 'Plenklipperen',
		locale: 'nb_NO',
		type: 'website',
	},
}

const page = () => {
	return (
		<>
			<PageHeadingSection
				image={'/images/grass4.jpg'}
				title={'Blogg'}
				paragraph={
					'Les nyttige artikler om plenklipping, hagearbeid og vedlikehold av uteområder i Bergen. Tips, guider og råd fra profesjonelle fagfolk.'
				}
			/>

			<section>
				<div className='section-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{Posts.map((post) => (
						<Link
							href={`/blogg/${post.slug}`}
							key={post.slug}
							className='w-full h-full flex flex-col justify-between hover:opacity-85 duration-200'
						>
							<div>
								<Image
									src={post.coverImage}
									alt={post.title}
									width={400}
									height={400}
									className='aspect-video object-cover rounded-2xl w-full'
								/>

								<div className='mt-4'>
									<h4>{post.title}</h4>

									<p className='mt-2'>{post.excerpt}</p>
								</div>
							</div>
							<div>
								<button
									type='button'
									aria-label={'Les mer om' + post.title}
									className={`p-2 mt-4 justify-self-end bg-primary pl-6 py-2 font-semibold rounded-full flex items-center gap-4 hover:bg-primaryAccent duration-200 cursor-pointer shadow-sm select-none w-fit `}
								>
									<span className='text-white text-[1em] text-nowrap whitespace-nowrap'>
										Les mer
									</span>

									<span className='aspect-square bg-white rounded-full w-[1.9em] flex items-center justify-center'>
										<ChevronRight
											className='text-primary'
											width={15}
										></ChevronRight>
									</span>
								</button>
							</div>
						</Link>
					))}
				</div>
			</section>
		</>
	)
}

export default page
