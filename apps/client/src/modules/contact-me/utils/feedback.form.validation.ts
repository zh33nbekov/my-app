import { validationRules } from '@packages/shared'
import { z } from 'zod'

export type FeedbackShema = z.infer<typeof feedbackSchema>
export const feedbackSchema = z.object({
	name: validationRules.name,
	email: validationRules.email,
	message: validationRules.message,
})
