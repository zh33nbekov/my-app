'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styles from './loading.module.scss'

export const Loading = () => {
	const [isLoading, setIsLoading] = useState(true)
	const t = useTranslations()
	const loaderText = t('Loading').split('')

	useEffect(() => {
		const handlePageLoad = () => {
			setIsLoading(false)
		}
		if (document.readyState === 'complete') {
			handlePageLoad()
		} else {
			window.addEventListener('load', handlePageLoad)
			return () => window.removeEventListener('load', handlePageLoad)
		}
	}, [])

	if (!isLoading) return null

	return (
		<div className={styles.loaderWrapper}>
			<div className={styles.loader} />
			<p className={styles.loader__text}>
				{t('Loading')}
				<span style={{ '--i': 1 } as React.CSSProperties}>.</span>
				<span style={{ '--i': 2 } as React.CSSProperties}>.</span>
				<span style={{ '--i': 3 } as React.CSSProperties}>.</span>
			</p>
		</div>
	)
}
