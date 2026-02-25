import { Posts } from './blogg/posts'

const sitemap = () => {
	const baseURL = 'https://www.gressservice.no'

	const blogPosts = Posts.map((post) => ({
		url: `${baseURL}/blogg/${post.slug}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.7,
	}))

	return [
		{
			url: baseURL,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseURL}/om-oss`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/tjenester`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/vintertjenester`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/galleri`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseURL}/kontakt-oss`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/blogg`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},

		...blogPosts,
		// {
		// 	url: `${baseURL}/blogg`,
		// 	lastModified: new Date(),
		// 	changeFrequency: 'monthly',
		// 	priority: 0.9,
		// },
	]
}

export default sitemap
