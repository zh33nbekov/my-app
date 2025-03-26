import { BASE_URL } from '@/constants'
import { IAbout } from '../types/aboutMe.type'
import { fetchApi } from '@/lib'

export const getAbout = async (locale: string) => {
	const response = await fetchApi<IAbout>(`${BASE_URL}/about?lang=${locale}`, {
		cache: 'force-cache',
	})

	return response
}
