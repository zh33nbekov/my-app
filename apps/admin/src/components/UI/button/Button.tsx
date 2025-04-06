import { memo } from 'react'
import { Loader } from '../../index'
import styles from './button.module.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	isDisabled?: boolean
}

export const Button: React.FC<IButton> = memo(({ children, isLoading, className, ...props }) => (
	<button className={`${styles.button} ${className}`} {...props}>
		{isLoading ? <Loader className={styles.button__loader} /> : children}
	</button>
))

Button.displayName = 'Button'
