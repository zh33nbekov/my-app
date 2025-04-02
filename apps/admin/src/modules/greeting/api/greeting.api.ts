import { baseApi } from '@/store/api'
import { IGreeting } from '../index'

const greetingQuery = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getGreeting: builder.query<IGreeting, string>({
			query: (lang) => ({
				url: 'greeting',
				headers: {
					'Accept-Language': lang,
				},
			}),
		}),
		updateGreeting: builder.mutation<IGreeting, FormData>({
			query: (formData) => {
				const id = formData.get('id')
				const lang = formData.get('language') as string
				return {
					url: `/greeting/${id}`,
					body: formData,
					method: 'PATCH',
					headers: {
						'Accept-Language': lang,
					},
				}
			},
		}),
	}),
})

export const { useGetGreetingQuery, useUpdateGreetingMutation } = greetingQuery
