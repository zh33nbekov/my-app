'use client'
import { Button, Input } from '@packages/shared'
import { FormEvent } from 'react'
import { LOGIN_INPUTS } from '../../constants'
import styles from './login-form.module.scss'

interface ILoginForm {
	onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const LoginForm: React.FC<ILoginForm> = ({ onSubmit }) => (
	<form className={styles.loginForm} onSubmit={onSubmit}>
		{LOGIN_INPUTS.map(({ name, type, placeholder }) => (
			<Input
				key={name}
				type={type}
				placeholder={placeholder}
				name={name}
				className={styles.loginForm__input}
				autoComplete='on'
				error=''
			/>
		))}
		<Button className={styles.loginForm__button} type='submit'>
			Войти
		</Button>
	</form>
)
