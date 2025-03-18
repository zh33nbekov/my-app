// import { NextRequest } from 'next/server'
// import { authMiddleware } from './middlewares/auth.middleware'
// import { middlewareChain } from './middlewares/middleware.chain'

// const middlewares = [authMiddleware]

// export const middleware = async (req: NextRequest) => await middlewareChain(req, middlewares)

// // const cookie = await cookies()
// // const accessToken = cookie.get('accessToken')
// // console.log(accessToken, 'accessToken')

// // const isAuthenticated = true

// // if (!isAuthenticated) {
// // 	return NextResponse.redirect(new URL('/login', req.url))
// // }
// // return NextResponse.next()

// export const config = {
// 	matcher: ['/dashboard/:path*'],
// }

import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
	// Получаем куку напрямую из запроса
	const accessToken = req.cookies.get('accessToken')?.value

	if (!accessToken) {
		return NextResponse.redirect(new URL('/login', req.url))
	}
	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*'],
}
