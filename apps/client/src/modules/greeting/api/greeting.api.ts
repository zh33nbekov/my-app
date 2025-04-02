import { BASE_URL } from '@/constants'
import { fetchApi } from '@/lib'
import { IGreeting } from '../types/greeting.type'

export const getGreeting = async () => {
	const response = await fetchApi<IGreeting>(`${BASE_URL}/greeting`, {
		cache: 'force-cache',
	})

	return response
}
