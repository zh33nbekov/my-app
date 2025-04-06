import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().nonempty('Обязателен для заполнения').email(),
	password: z
		.string()
		.nonempty('Обязателен для заполнения')
		.min(6, 'Минимальное количество символов'),
})
