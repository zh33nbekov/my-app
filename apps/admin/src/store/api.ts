import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
	// baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/api/v1' }),
	endpoints: () => ({}),
})
