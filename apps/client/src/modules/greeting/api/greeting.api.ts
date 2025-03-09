import { BASE_URL } from '@/constants'
import { fetchApi } from '@packages/shared'
import { IGreeting } from '../types/greeting.type'

export const getGreeting = async (locale: string) => {
	const response = await fetchApi<IGreeting>(`${BASE_URL}/greeting?lang=${locale}`, {
		cache: 'force-cache',
	})

	return response
}
