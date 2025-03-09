import { HEADER_LINKS } from '@/constants'
import { Link } from '@packages/shared'
import { useTranslations } from 'next-intl'
import styles from './header-desktop.module.scss'

export const HeaderDesktop = () => {
	const t = useTranslations('Header')
	return (
		<ul className={styles.list}>
			{HEADER_LINKS.map(({ label, path }) => (
				<li key={label} className={styles.list__item}>
					<Link href={`#${path}`}>{t(label)}</Link>
				</li>
			))}
		</ul>
	)
}
