import clsx from 'clsx'
import styles from './loader.module.scss'

interface ILoader extends React.HTMLAttributes<HTMLDivElement> {}
export const Loader: React.FC<ILoader> = ({ className }) => (
	<div className={clsx(styles.loader, className)} />
)
