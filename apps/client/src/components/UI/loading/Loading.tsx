'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import styles from './loading.module.scss'

export const Loading = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isVisible, setIsVisible] = useState(true)

	const handleTransitionEnd = () => {
		setIsVisible(false)
	}

	useEffect(() => {
		const handlePageLoad = () => {
			setIsLoading(false)
			document.body.style = ''
		}

		if (document.readyState === 'complete') {
			handlePageLoad()
		} else {
			window.addEventListener('load', handlePageLoad)
			return () => window.removeEventListener('load', handlePageLoad)
		}
	}, [])

	if (!isVisible) return null

	return (
		<>
			<div
				onTransitionEnd={handleTransitionEnd}
				className={clsx(styles.loaderContainer, { [styles.disabled]: !isLoading })}
			>
				<div className={styles.loaderContent}>
					<div className={styles.loader} />
					{/* <p className={styles.loader__text}>Загрузка...</p> */}
				</div>
			</div>
		</>
	)
}
