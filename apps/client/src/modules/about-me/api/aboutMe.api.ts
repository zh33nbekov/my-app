import { BASE_URL } from '@/constants'
import { fetchApi } from '@/lib'
import { IAbout } from '../types/aboutMe.type'

export const getAbout = async () => {
	const response = await fetchApi<IAbout>(`${BASE_URL}/about`, {
		cache: 'force-cache',
	})

	return response
}
