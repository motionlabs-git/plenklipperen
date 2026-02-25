import PageHeadingSection from '@/app/components/UI/PageHeadingSection'
import type { Metadata } from 'next'
import { Posts } from '../posts'
import { redirect } from 'next/navigation'
import ContactUs from '@/app/components/Sections/Contact/ContactUs'
import Link from 'next/link'

type Props = {
	params: Promise<{ slug: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	const post = Posts.find((post) => post.slug === slug)

	return {
		title: post?.seo?.metaTitle
			? `Blog | ${post.seo.metaTitle}`
			: 'Blog Post',
		description: post?.seo.metaDescription ?? 'Blog description then',
		keywords: post?.seo.keywords,
		openGraph: {
			images: post?.coverImage,
		},
	}
}

export default async function Page({ params }: Props) {
	const { slug } = await params

	const post = Posts.find((post) => post.slug === slug)

	if (!post) {
		redirect('/not-found')
	}

	return (
		<>
			<PageHeadingSection
				image={post.coverImage}
				title={post.title}
				paragraph={post.seo.metaDescription}
			/>

			<section>
				<div className='section-wrapper'>
					<div className='blogPostContent'>
						<div>
							<p>Publisert på {post.date}</p>

							<p>
								Forfatter: <Link href={'/'}>{post.author}</Link>
							</p>
						</div>
						<div
							className='mt-10'
							dangerouslySetInnerHTML={{ __html: post.content }}
						></div>
					</div>

					<div></div>
				</div>
			</section>
			<span className='divider '></span>
			<ContactUs />
		</>
	)
}
