'use client'
import { usePathname } from 'next/navigation'

export const useBreadcrumbs = () => {
	const pathname = usePathname() // Получаем текущий путь
	const pathSegments = pathname.split('/').filter(Boolean) // Разбиваем путь на части

	const breadcrumbs = pathSegments.map((segment, index) => {
		const path = `/${pathSegments.slice(0, index + 1).join('/')}` // Генерируем путь до сегмента
		const label = decodeURIComponent(segment) // Читаем название сегмента
		return { path, label }
	})

	return breadcrumbs
}
