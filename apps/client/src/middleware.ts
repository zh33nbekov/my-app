import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const supportedLocales = ['ru', 'en']

const middleware = (request: NextRequest) => {
	const { pathname } = request.nextUrl
	if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/api') || pathname.startsWith('/_next')) {
		return
	}

	const locale = supportedLocales.find((locale) => pathname.startsWith(`/${locale}`))

	if (!locale) {
		const defaultLocale = 'ru'
		return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url))
	}
}
export default middleware
