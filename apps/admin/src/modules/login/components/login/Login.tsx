'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../api/login.api'
import { ILoginApiError, LoginForm, loginSchema } from '../../index'
import { LoginSchema } from '../../types/validation.type'

const showToast = async (success?: string | null, error?: string) => {
	const { showFailedToast, showSuccessToast } = await import('@packages/shared')
	if (success) {
		showSuccessToast(success)
	}
	if (error) {
		showFailedToast(error)
	}
}

export const Login = () => {
	const router = useRouter()
	const [loginHandler] = useLoginMutation()
	const {
		register,
		handleSubmit,
		// reset,
		formState: { errors },
	} = useForm({
		mode: 'onSubmit',
		resolver: zodResolver(loginSchema),
	})
	const submitHandler = async (data: LoginSchema) => {
		try {
			const { info } = await loginHandler(data).unwrap()
			showToast(info)
			router.replace('/dashboard')
		} catch (err) {
			const error = err as ILoginApiError
			showToast(null, error.data.message ?? 'Error')
			console.log(err)
		}
	}

	return (
		<LoginForm
			errors={errors}
			register={register}
			onSubmit={submitHandler}
			handleSubmit={handleSubmit}
		/>
	)
}
