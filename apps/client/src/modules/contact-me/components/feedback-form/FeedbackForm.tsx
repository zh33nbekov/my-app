'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, showSuccessToast, Textarea } from '@packages/shared'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { FEEDBACK_FORM_INPUTS } from '../../constants'
import { feedbackSchema, FeedbackShema, sendFeedback } from '../../index'
import styles from './feedback-form.module.scss'

export const FeedbackForm: React.FC = () => {
	const t = useTranslations('FeedbackForm')
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FeedbackShema>({
		mode: 'onSubmit',
		resolver: zodResolver(feedbackSchema),
	})

	const submitHandler = async (data: FeedbackShema) => {
		console.log(data)
		try {
			const response = await sendFeedback(data)
			console.log(response)
			showSuccessToast(response.info)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form className={styles.feedbackForm} onSubmit={handleSubmit(submitHandler)}>
			{FEEDBACK_FORM_INPUTS.map(({ name, placeholder, type }) => (
				<Input
					key={name}
					placeholder={t(placeholder)}
					type={type}
					{...register(name)}
					autoComplete='on'
					className={styles.feedbackForm__input}
					error={errors[name]?.message}
				/>
			))}
			<Textarea
				className={styles.feedbackForm__textarea}
				id='message'
				{...register('message')}
				placeholder={t('message')}
				error={errors['message']?.message}
			/>
			<Button className={styles.feedbackForm__submit} type='submit'>
				{t('send')}
			</Button>
		</form>
	)
}
