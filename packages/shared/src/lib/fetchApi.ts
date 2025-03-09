export const fetchApi = async <T>(url: string, options?: RequestInit): Promise<T> => {
	try {
		const response = await fetch(url, {
			...options,
			headers: {
				...options?.headers, // Позволяет передавать доп. заголовки
			},
		})

		if (!response.ok) {
			// Если сервер вернул ошибку — выбрасываем исключение
			const errorText = await response.text()
			throw new Error(`Ошибка ${response.status}: ${errorText}`)
		}

		return response.json() as Promise<T>
	} catch (error) {
		console.log('Ошибка при запросе:', error)
		throw error // Пробрасываем ошибку дальше, чтобы её можно было обработать в компоненте
	}
}
