/* eslint-disable indent */
import { NextResponse } from 'next/server'

export const GET = async () => {
	const baseUrl = 'https://rai-zheenbekov.vercel.app'
	const pages = ['']

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${pages
			.map(
				(path) => `
			<url>
				<loc>${baseUrl}${path}</loc>
				<lastmod>2025-04-07</lastmod>
				<changefreq>always</changefreq>
				<priority>1.0</priority>
			</url>
		`
			)
			.join('')}
	</urlset>`

	return new NextResponse(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
		},
	})
}
