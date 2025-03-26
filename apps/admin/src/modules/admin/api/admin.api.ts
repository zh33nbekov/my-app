import { baseApi } from '@/store/api'
import { IAdmin } from '../index'

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
