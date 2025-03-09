'use client'

import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs'
import styles from './header.module.scss'

export const Header = () => (
	<header className={styles.header}>
		<Breadcrumbs />
	</header>
)
