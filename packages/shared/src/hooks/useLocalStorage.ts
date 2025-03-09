'use client'

import { useCallback, useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
	// Получаем текущее значение из localStorage или устанавливаем начальное
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.log(`Ошибка при получении ключа "${key}" из localStorage:`, error)
			return initialValue
		}
	})

	const setValue = useCallback(
		(value: T | ((val: T) => T)) => {
			try {
				const valueToStore = value instanceof Function ? value(storedValue) : value
				setStoredValue(valueToStore)
				window.localStorage.setItem(key, JSON.stringify(valueToStore))
			} catch (error) {
				console.error(`Ошибка при сохранении ключа "${key}" в localStorage:`, error)
			}
		},
		[key, storedValue]
	)

	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key) {
				try {
					setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue)
				} catch (error) {
					console.log(`Ошибка при синхронизации ключа "${key}":`, error)
				}
			}
		}

		window.addEventListener('storage', handleStorageChange)
		return () => window.removeEventListener('storage', handleStorageChange)
	}, [key, initialValue])

	return [storedValue, setValue] as const
}
