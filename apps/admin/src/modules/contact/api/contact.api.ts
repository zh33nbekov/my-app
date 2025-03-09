import { baseApi } from '@/store/api'
import { IContact } from '../index'

const contactApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getContact: builder.query<IContact, void>({
			query: () => 'contact',
		}),
		updateContact: builder.mutation<IContact, FormData>({
			query: (formData) => {
				const id = formData.get('id')
				return {
					url: `contact/${id}`,
					body: formData,
					method: 'PATCH',
				}
			},
		}),
	}),
})

export const { useGetContactQuery, useUpdateContactMutation } = contactApi
