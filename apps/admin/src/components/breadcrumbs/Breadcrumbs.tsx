'use client'

import { useBreadcrumbs } from '@/hooks'
import Link from 'next/link'
import styles from './breadcrumbs.module.scss'

export const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs()

	return (
		<div role='presentation' aria-label='breadcrumbs' className={styles.breadcrumbs}>
			<Link href='/' className={`${styles.crumb__link} ${!breadcrumbs.length && styles.active}`}>
				Home
			</Link>
			{breadcrumbs.map((crumb, index) => (
				<div key={crumb.path} className={styles.crumb}>
					<span className={styles.crumb__divider}>/</span>
					<Link
						href={crumb.path}
						className={`${styles.crumb__link} ${index === breadcrumbs.length - 1 && styles.active}`}
					>
						{crumb.label}
					</Link>
				</div>
			))}
		</div>
	)
}
