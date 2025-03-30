import withBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

const nextConfig: NextConfig = {
	reactStrictMode: false,
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

export default withNextIntl(withAnalyzer(nextConfig))
