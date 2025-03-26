'use client'

import { DecorativeElement } from '@/components/UI'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea } from '@packages/shared'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FEEDBACK_FORM_INPUTS, feedbackSchema, FeedbackShema } from '../../index'
import styles from './feedback-form.module.scss'

export const FeedbackForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const t = useTranslations('FeedbackForm')
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FeedbackShema>({
		mode: 'onSubmit',
		resolver: zodResolver(feedbackSchema),
	})

	const submitHandler = async (data: FeedbackShema) => {
		try {
			setIsLoading(true)
			const { sendFeedback } = await import('../../index')
			const { info } = (await sendFeedback(data)) ?? { info: 'Something went wrong' }
			setIsLoading(false)
			const { showSuccessToast } = await import('@packages/shared')
			showSuccessToast(info)
			reset()
		} catch (error) {
			console.log(error)
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
					placeholder={t(placeholder)}
					error={errors[name]?.message}
					className={styles.feedbackForm__input}
				/>
			))}
			<Textarea
				id='message'
				{...register('message')}
				placeholder={t('message')}
				error={errors['message']?.message}
				className={styles.feedbackForm__textarea}
			/>
			<Button className={styles.feedbackForm__submit} type='submit' isLoading={isLoading}>
				{t('send')}
			</Button>
			<DecorativeElement className={styles.decorativeElement} />
		</form>
	)
}
