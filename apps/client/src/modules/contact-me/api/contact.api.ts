import { BASE_URL } from '@/constants'
import { IContact } from '../types/contact.type'
import { fetchApi } from '@/lib'

export const getContact = async () => {
	const response = await fetchApi<IContact>(`${BASE_URL}/contact`, { cache: 'force-cache' })

	return response
}
