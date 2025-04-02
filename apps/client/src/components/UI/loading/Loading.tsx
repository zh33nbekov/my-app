'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styles from './loading.module.scss'

export const Loading = () => {
	const [isLoading, setIsLoading] = useState(true)
	const t = useTranslations()

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
		<>
			{isLoading && (
				<div className={styles.loaderContainer}>
					<div className={styles.loaderContent}>
						<div className={styles.loader} />
						<p className={styles.loader__text}>{t('Loading')}</p>
					</div>
				</div>
			)}
		</>
	)
}
