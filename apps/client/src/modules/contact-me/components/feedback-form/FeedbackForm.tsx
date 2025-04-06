'use client'

import { DecorativeElement } from '@/components/UI'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, showFailedToast, Textarea } from '@packages/shared'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FEEDBACK_FORM_INPUTS, feedbackSchema, FeedbackSchema } from '../../index'
import styles from './feedback-form.module.scss'

export const FeedbackForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const tFeedback = useTranslations('FeedbackForm')
	const tValidation = useTranslations('ValidationErrors')
	const locale = useLocale()
	const {
		register,
		handleSubmit,
		// reset,
		formState: { errors },
	} = useForm<FeedbackSchema>({
		mode: 'onSubmit',
		resolver: zodResolver(feedbackSchema(tValidation)),
	})

	const submitHandler = async (data: FeedbackSchema) => {
		try {
			setIsLoading(true)
			const { sendFeedback } = await import('../../index')
			const { info } = await sendFeedback(data, locale)
			const { showSuccessToast } = await import('@packages/shared')
			showSuccessToast(info)
			// reset()
		} catch {
			showFailedToast('Что-то пошло не так')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form className={styles.feedbackForm} onSubmit={handleSubmit(submitHandler)}>
			{FEEDBACK_FORM_INPUTS.map(({ name, placeholder, type }) => (
				<Input
					key={name}
					type={type}
					autoComplete='on'
					{...register(name)}
					placeholder={tFeedback(placeholder)}
					error={errors[name]?.message}
				/>
			))}
			<Textarea
				id='message'
				{...register('message')}
				placeholder={tFeedback('message')}
				error={errors['message']?.message}
				className={styles.feedbackForm__textarea}
			/>
			<Button className={styles.feedbackForm__submit} type='submit' isLoading={isLoading}>
				{tFeedback('send')}
			</Button>
			<DecorativeElement className={styles.decorativeElement} />
		</form>
	)
}
