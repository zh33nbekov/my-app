import { BASE_URL } from '@/constants'
import { IGreeting } from '../types/greeting.type'
import { fetchApi } from '@/lib'

export const getGreeting = async (locale: string) => {
	const response = await fetchApi<IGreeting>(`${BASE_URL}/greeting?lang=${locale}`, {
		cache: 'force-cache',
	})

	return response
}
