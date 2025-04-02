import { baseApi } from '@/store/api'
import { IAbout } from '../index'

const aboutApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAbout: builder.query<IAbout, string>({
			query: (lang) => ({
				url: 'about',
				headers: {
					'Accept-Language': lang,
				},
			}),
		}),
		updateAbout: builder.mutation<IAbout, FormData>({
			query: (formData) => {
				const id = formData.get('id')
				const lang = formData.get('language') as string
				return {
					method: 'PATCH',
					body: formData,
					url: `about${id}`,
					headers: {
						'Accept-Language': lang,
					},
				}
			},
		}),
	}),
})

export const { useGetAboutQuery, useUpdateAboutMutation } = aboutApi
