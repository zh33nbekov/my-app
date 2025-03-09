import { baseApi } from '@/store/api'
import { IAdmin } from '../index'

// export const getAdminProfile = async () => {
// 	const cookieHeader = (await cookies()).getAll()
// 	const response = await fetchApi<IAdmin>(`${BASE_URL}/me`, {
// 		cache: 'force-cache',
// 		credentials: 'include',
// 		headers: {
// 			Cookie: cookieHeader.map(({ name, value }) => `${name}=${value}`).join('; '), // Передаём куки вручную
// 		},
// 	})

// 	return response
// }

const adminApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAdminProfile: builder.query<IAdmin, void>({
			query: () => ({
				url: 'me',
				credentials: 'include',
			}),
		}),
	}),
})

export const { useGetAdminProfileQuery } = adminApi
