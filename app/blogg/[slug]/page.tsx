import PageHeadingSection from '@/app/components/UI/PageHeadingSection'
import type { Metadata } from 'next'
import { Posts } from '../posts'
import { notFound } from 'next/navigation'
import ContactUs from '@/app/components/Sections/Contact/ContactUs'
import Link from 'next/link'
import JsonLd from '@/app/components/SEO/JsonLd'
import { blogPostingSchema, pageMetadata } from '@/app/lib/seo'

type Props = {
	params: Promise<{ slug: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const dynamicParams = false

export const generateStaticParams = () =>
	Posts.map((post) => ({ slug: post.slug }))

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	const post = Posts.find((post) => post.slug === slug)

	if (!post) {
		notFound()
	}

	return pageMetadata({
		title: post.seo.metaTitle,
		description: post.seo.metaDescription,
		path: `/blogg/${post.slug}`,
		image: post.coverImage,
		keywords: post.seo.keywords,
		article: { publishedTime: post.date, authors: [post.author] },
	})
}

export default async function Page({ params }: Props) {
	const { slug } = await params

	const post = Posts.find((post) => post.slug === slug)

	if (!post) {
		notFound()
	}

	return (
		<>
			<JsonLd data={blogPostingSchema(post)} />
			<PageHeadingSection
				breadcrumbs={[
					{ name: 'Blogg', path: '/blogg' },
					{ name: post.title, path: `/blogg/${post.slug}` },
				]}
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
