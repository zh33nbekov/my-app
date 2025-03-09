import { NextRequest, NextResponse } from 'next/server'

type Middleware = (req: NextRequest) => Promise<NextResponse | unknown>

export const middlewareChain = async (req: NextRequest, middlewares: Middleware[]) => {
	for (const middleware of middlewares) {
		const response = await middleware(req)
		if (response) return response
	}
	return NextResponse.next()
}
