import { NextRequest } from 'next/server'
import { authMiddleware } from './middlewares/auth.middleware'
import { middlewareChain } from './middlewares/middleware.chain'

const middlewares = [authMiddleware]

export const middleware = async (req: NextRequest) => await middlewareChain(req, middlewares)

// const cookie = await cookies()
// const accessToken = cookie.get('accessToken')
// console.log(accessToken, 'accessToken')

// const isAuthenticated = true

// if (!isAuthenticated) {
// 	return NextResponse.redirect(new URL('/login', req.url))
// }
// return NextResponse.next()

export const config = {
	matcher: ['/dashboard/:path*'],
}
