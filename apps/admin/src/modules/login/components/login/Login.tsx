'use client'

import { useRouter } from 'next/navigation'
import { useLoginMutation } from '../../api/login.api'
import { ILoginApiError } from '../../types/login.type'
import { LoginForm } from '../login-form/LoginForm'

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
	const [loginHandler] = useLoginMutation({})
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const email = formData.get('email')
		const password = formData.get('password')
		const data = {
			email,
			password,
		}
		try {
			const { info } = await loginHandler(data).unwrap()
			showToast(info)
			router.replace('/')
		} catch (err) {
			const error = err as ILoginApiError
			showToast(null, error.data.message ?? 'Error')
			console.log(err)
		}
	}
	return (
		<>
			<LoginForm onSubmit={handleSubmit} />
		</>
	)
}
