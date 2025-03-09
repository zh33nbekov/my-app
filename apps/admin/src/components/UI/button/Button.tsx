import { Loader } from '../../index'
import styles from './button.module.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	isDisabled?: boolean
}

export const Button: React.FC<IButton> = ({ children, isLoading, isDisabled, className }) => (
	<button disabled={isDisabled} className={`${styles.button} ${className}`}>
		{isLoading ? <Loader /> : children}
	</button>
)
