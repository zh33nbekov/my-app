import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const authMiddleware = async (req: NextRequest) => {
	const cookie = await cookies()
	const accessToken = cookie.get('accessToken')
	console.log(cookie, 'cookie')

	if (!accessToken) {
		return NextResponse.redirect(new URL('/login', req.url))
	}
	return NextResponse.next()
}
