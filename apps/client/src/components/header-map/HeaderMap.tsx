'use client'

import clsx from 'clsx'
import styles from './header-map.module.scss'

import { useState } from 'react'

export const HeaderMap = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const handleLoad = () => setIsLoaded(true)
	const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
		e.currentTarget.style.display = 'none'
	}

	return (
		<div className={styles.headerMap}>
			<div
				onTransitionEnd={handleTransitionEnd}
				className={clsx(styles.headerMap__loader, { [styles.disabled]: isLoaded })}
			/>
			<iframe
				src='https://yandex.com/map-widget/v1/?ll=74.638673%2C42.849312&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTQxNTk4NzEzEjzQmtGL0YDQs9GL0LfRgdGC0LDQvSwg0JHQuNGI0LrQtdC6LCDQotC-0qMg0LrTqdGH06nRgdKvLCAxMjQiCg0AR5VCFbJlK0I%2C&z=16.85'
				allowFullScreen
				style={{
					border: 'none',
					position: 'relative',
					opacity: isLoaded ? '1' : '0',
				}}
				onLoad={handleLoad}
			></iframe>
		</div>
	)
}
