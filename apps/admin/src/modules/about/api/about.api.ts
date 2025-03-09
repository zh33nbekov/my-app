import { baseApi } from '@/store/api'
import { IAbout } from '../index'

const aboutApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAbout: builder.query<IAbout, string>({
			query: (lang) => `about?lang=${lang}`,
		}),
		updateAbout: builder.mutation<IAbout, FormData>({
			query: (formData) => {
				const id = formData.get('id')
				const lang = formData.get('language')
				return {
					method: 'PATCH',
					body: formData,
					url: `about/${id}?lang=${lang}`,
				}
			},
		}),
	}),
})

export const { useGetAboutQuery, useUpdateAboutMutation } = aboutApi
