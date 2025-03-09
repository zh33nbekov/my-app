import { BASE_URL } from '@/constants'
import { fetchApi } from '@packages/shared'
import { IAbout } from '../types/aboutMe.type'

export const getAbout = async (locale: string) => {
	const response = await fetchApi<IAbout>(`${BASE_URL}/about?lang=${locale}`, {
		cache: 'force-cache',
	})

	return response
}
