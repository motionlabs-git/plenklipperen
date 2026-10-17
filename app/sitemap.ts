import type { MetadataRoute } from 'next'
import { Posts } from './blogg/posts'
import {
	CityPartLinks,
	NavigationLinks,
	ServicesLinks,
} from './contstants/navigationLinks'
import { SITE_URL } from './lib/seo'

const sitemap = (): MetadataRoute.Sitemap => {
	// Pages are taken from the navigation so the sitemap can't drift from real routes
	const pages = [
		...NavigationLinks.map((item) => item.link),
		...ServicesLinks.map((item) => item.link),
		...CityPartLinks.map((item) => item.link),
		'/omrader',
	].map((path) => ({ url: `${SITE_URL}${path === '/' ? '' : path}` }))

	const blogPosts = Posts.map((post) => ({
		url: `${SITE_URL}/blogg/${post.slug}`,
		lastModified: post.date,
	}))

	return [...pages, ...blogPosts]
}

export default sitemap
