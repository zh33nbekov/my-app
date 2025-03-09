import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const authMiddleware = async (req: NextRequest) => {
	const cookie = await cookies()
	const isAuthenticated = cookie.get('accessToken')

	if (!isAuthenticated) {
		return NextResponse.redirect(new URL('/login', req.url))
	}
	return NextResponse.next()
}
