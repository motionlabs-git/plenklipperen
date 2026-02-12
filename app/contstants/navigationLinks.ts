export const ServicesLinks = [
	{
		title: 'Plenhold',
		text: 'Some text about gresskliping',
		image: '/images/Hero_image.jpg',
		link: '/tjenester#plenhold',
	},
	{
		title: 'Maintanance',
		text: 'Planting, weed removing, hedge cutting...',
		image: '/images/bushes.jpg',
		link: '/tjenester#maintanance',
	},
	{
		title: 'Tree cutting',
		text: 'Some text about tree cutting',
		image: '/images/chris_adam.jpg',
		link: '/tjenester#tree-cutting',
	},
	{
		title: 'Adjustments/repairs',
		text: 'Other jobs like painting, repairs, cleaning',
		image: '/images/okap.jpg',
		link: '/tjenester#adjustments',
	},
]

export const NavigationLinks = [
	{
		text: 'Hjem',
		link: '/',
	},
	{
		text: 'Om oss',
		link: '/om-oss',
	},
	{
		text: 'Tjenester',
		link: '/tjenester',
		subLinks: [...ServicesLinks],
	},
	{
		text: 'Vintertjeneste',
		link: '/vintertjeneste',
	},
	{
		text: 'Galleri',
		link: '/galleri',
	},
	{
		text: 'Kontakt',
		link: '/kontakt',
	},
]
