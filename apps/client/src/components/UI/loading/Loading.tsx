'use client'

import { useEffect, useState } from 'react'
import styles from './loading.module.scss'

export const Loading = () => {
	const [isLoading, setIsLoading] = useState(true)

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
		</div>
	)
}
