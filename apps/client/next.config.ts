import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['portfolio-bucket0303.s3.eu-north-1.amazonaws.com'],
	},
}

export default withNextIntl(nextConfig)
