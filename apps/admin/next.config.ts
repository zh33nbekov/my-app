import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		domains: ['portfolio-bucket0303.s3.eu-north-1.amazonaws.com', 'sun1-16.userapi.com'],
	},
	devIndicators: false,
}

export default nextConfig
