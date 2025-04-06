import { z } from 'zod'
import { feedbackSchema } from '../utils/feedback.form.validation'

export type FeedbackSchema = z.infer<ReturnType<typeof feedbackSchema>>
