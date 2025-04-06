import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'portfolio-bucket0303.s3.eu-north-1.amazonaws.com',
			},
		],
	},
	devIndicators: false,
}

export default nextConfig
