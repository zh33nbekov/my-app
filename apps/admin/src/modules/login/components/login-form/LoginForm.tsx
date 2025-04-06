'use client'

import { Button, Input } from '@packages/shared'
import Link from 'next/link'
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { LOGIN_INPUTS } from '../../constants'
import { LoginSchema } from '../../index'
import styles from './login-form.module.scss'

interface ILoginForm {
	errors: FieldErrors<LoginSchema>
	onSubmit: (data: LoginSchema) => void
	register: UseFormRegister<LoginSchema>
	handleSubmit: UseFormHandleSubmit<LoginSchema>
}

export const LoginForm: React.FC<ILoginForm> = (props) => (
	<form className={styles.loginForm} onSubmit={props.handleSubmit(props.onSubmit)}>
		{LOGIN_INPUTS.map(({ name, type, placeholder }) => (
			<Input
				key={name}
				type={type}
				autoComplete='on'
				placeholder={placeholder}
				{...props.register(name)}
				error={props.errors[name]?.message}
				className={styles.loginForm__input}
			/>
		))}
		<Link href='/signup' className={styles.loginForm__link}>
			<span
				onClick={(e) => {
					e.preventDefault()
					e.stopPropagation()
				}}
			>
				Нету аккаунта?
			</span>
			Регистрация
		</Link>
		<Button className={styles.loginForm__button} type='submit'>
			Войти
		</Button>
	</form>
)
