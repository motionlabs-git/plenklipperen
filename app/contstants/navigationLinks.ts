export const ServicesLinks = [
	{
		title: 'Gresskliping',
		text: 'Some text about gresskliping',
		image: '/images/Hero_image.jpg',
		link: '/services#grasscutting',
	},
	{
		title: 'Maintanance',
		text: 'Planting, weed removing, hedge cutting...',
		image: '/images/bushes.jpg',
		link: '/services#maintanance',
	},
	{
		title: 'Tree cutting',
		text: 'Some text about tree cutting',
		image: '/images/chris_adam.jpg',
		link: '/services#tree-cutting',
	},
	{
		title: 'Adjustments/repairs',
		text: 'Other jobs like painting, repairs, cleaning',
		image: '/images/okap.jpg',
		link: '/services#adjustments',
	},
]

export const NavigationLinks = [
	{
		text: 'Home',
		link: '/',
	},
	{
		text: 'About',
		link: '/about',
	},
	{
		text: 'Services',
		link: '/services',
		subLinks: [...ServicesLinks],
	},
	{
		text: 'Vinter service',
		link: '/winter',
	},
	{
		text: 'Gallery',
		link: '/gallery',
	},
	{
		text: 'Contact',
		link: '/contact',
	},
]
