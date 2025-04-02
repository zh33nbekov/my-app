import { getLocale } from 'next-intl/server'

export const fetchApi = async <T>(url: string, options?: RequestInit): Promise<T> => {
	const locale = await getLocale()
	try {
		const response = await fetch(url, {
			...options,
			headers: {
				...options?.headers,
				'Accept-Language': locale,
			},
		})

		if (!response.ok) {
			const errorText = await response.text()
			throw new Error(`Ошибка ${response.status}: ${errorText}`)
		}

		return response.json() as Promise<T>
	} catch (error) {
		console.log('Ошибка при запросе:', error)
		throw error
	}
}
