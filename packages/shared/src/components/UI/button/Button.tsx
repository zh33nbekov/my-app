import clsx from 'clsx'
import { memo } from 'react'
import { Loader } from '../loader/Loader'
import styles from './button.module.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean
	isLoading?: boolean
}

export const Button: React.FC<IButton> = memo(
	({ active, children, className, isLoading, ...props }) => (
		<button {...props} className={clsx(styles.button, className, { [styles.active]: active })}>
			{isLoading ? <Loader /> : children}
		</button>
	)
)

Button.displayName = 'Button'
