const sitemap = () => {
	const baseURL = 'https://acme.com'

	return [
		{
			url: baseURL,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseURL}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]
}

export default sitemap
