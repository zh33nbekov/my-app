import { z } from 'zod'
import { loginSchema } from '../index'

export type LoginSchema = z.infer<typeof loginSchema>
