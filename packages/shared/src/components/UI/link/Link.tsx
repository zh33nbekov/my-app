import { default as NextLink } from 'next/link'
import styles from './link.module.scss'

interface ILink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	active?: boolean
}
export const Link: React.FC<ILink> = ({ href, children, className }) => (
	<NextLink className={`${styles.link} ${className}`} href={href}>
		{children}
	</NextLink>
)
