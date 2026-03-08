import { Posts } from './blogg/posts'

const sitemap = () => {
	const baseURL = 'https://plenklipperen.no'

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
			changeFrequency: 'weekly',
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
			url: `${baseURL}/tjenester/plenhold`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseURL}/tjenester/hagevedlikehold`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseURL}/tjenester/trefelling`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseURL}/tjenester/reparasjoner-og-justeringer`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
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
			url: `${baseURL}/gressklipping-fana`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseURL}/hagevedlikehold-nesttun`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseURL}/plenklipping-asane`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseURL}/hagearbeid-fyllingsdalen`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseURL}/gressklipping-lagunen`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseURL}/plenklipping-laksevag`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},

		{
			url: `${baseURL}/blogg`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.6,
		},

		...blogPosts,
	]
}

export default sitemap
