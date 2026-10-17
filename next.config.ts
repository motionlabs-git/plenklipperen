import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
		NEXT_PUBLIC_EMAILJS_SERVICE_ID:
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
		NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID:
			process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID,
	},
	async redirects() {
		return [
			{
				source: '/kontakt-oss',
				destination: '/kontakt',
				permanent: true,
			},
		]
	},
}

export default nextConfig
