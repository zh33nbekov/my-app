import { baseApi } from '@/store/api'
import { IGreeting } from '../index'

const greetingQuery = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getGreeting: builder.query<IGreeting, string>({
			query: (language) => `greeting?lang=${language}`,
		}),
		updateGreeting: builder.mutation<IGreeting, FormData>({
			query: (formData) => {
				const id = formData.get('id')
				const language = formData.get('language')
				return {
					url: `/greeting/${id}?lang=${language}`,
					body: formData,
					method: 'PATCH',
				}
			},
		}),
	}),
})

export const { useGetGreetingQuery, useUpdateGreetingMutation } = greetingQuery
