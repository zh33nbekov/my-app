import { ButtonHTMLAttributes, memo } from 'react'
import styles from './button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean
}

export const Button: React.FC<IButton> = memo(({ active, children, className, ...props }) => (
	<button className={`${styles.button} ${className} ${active && styles.active}`} {...props}>
		{children}
	</button>
))
Button.displayName = 'Button'
