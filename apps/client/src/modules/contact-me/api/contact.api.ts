import { BASE_URL } from '@/constants'
import { fetchApi } from '@/lib'
import { IContact } from '../types/contact.type'

export const getContact = async () => {
	const response = await fetchApi<IContact>(`${BASE_URL}/contact`, { cache: 'force-cache' })

	return response
}
