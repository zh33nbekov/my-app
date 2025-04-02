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
		<div className={styles.loader}>
			<svg
				width='44px'
				height='44px'
				viewBox='0 0 44 44'
				xmlns='http://www.w3.org/2000/svg'
				stroke='#fff'
			>
				<g fill='none' fillRule='evenodd' strokeWidth='4'>
					<circle cx='22' cy='22' r='20' strokeOpacity='0.2' />
					<path d='M42 22c0-11.05-8.95-20-20-20'>
						<animateTransform
							attributeName='transform'
							type='rotate'
							from='0 22 22'
							to='360 22 22'
							dur='3s'
							keyTimes='0;0.5;1'
							values='0 22 22; 360 22 22; -360 22 22'
							keySplines='0.25 0.8 0.25 1; 0.25 0.8 0.25 1'
							repeatCount='indefinite'
						/>
					</path>
				</g>
			</svg>
			<p className={styles.loader__text}>
				{loaderText.map((letter, index) => (
					<span key={index} style={{ '--i': index + 1 } as React.CSSProperties}>
						{letter}
					</span>
				))}
			</p>
		</div>
	)
}
