import { baseApi } from '@/store/api'
import { ILoginRequest, ILoginResponse } from '../index'

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<ILoginRequest, ILoginResponse>({
			query: (data) => ({
				body: data,
				url: 'auth/login',
				method: 'POST',
				credentials: 'include',
			}),
		}),
	}),
})

export const { useLoginMutation } = authApi
