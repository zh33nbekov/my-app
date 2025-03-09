import { UseFormRegister } from 'react-hook-form'
import { TypeOf, ZodSchema } from 'zod'

/**
 * Универсальный тип-хелпер, который извлекает тип UseFormRegister<>
 * из переданной Zod-схемы
 */
export type GetSchemaRegister<T extends ZodSchema> = UseFormRegister<TypeOf<T>>
