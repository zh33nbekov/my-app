import clsx from 'clsx'
import { InputHTMLAttributes, memo } from 'react'
import styles from './input.module.scss'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	error?: string
}

export const Input: React.FC<IInput> = memo(({ className, error, ...props }) => (
	<div className={styles.inputBox}>
		<input className={clsx(styles.inputBox__input, className)} {...props} />
		{error && <span className={styles.inputBox__error}>{error}</span>}
	</div>
))

Input.displayName = 'Input'
