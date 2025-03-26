import { z } from 'zod'

export const feedbackSchema = (t: (key: string) => string) =>
	z.object({
		name: z
			.string()
			.nonempty(t('nonempty'))
			.min(3, `${t('min')} 3`)
			.max(25, `${t('max')} 25`),
		email: z.string().nonempty(t('nonempty')).email(t('email')),
		message: z
			.string()
			.nonempty(t('nonempty'))
			.min(5, `${t('min')} 5`)
			.max(55, `${t('max')} 55`),
	})

export type FeedbackSchema = z.infer<ReturnType<typeof feedbackSchema>>
