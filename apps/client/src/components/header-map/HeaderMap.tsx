'use client'
import styles from './header-map.module.scss'

import { useState } from 'react'

export const HeaderMap = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const handleLoad = () => setIsLoaded(true)

	return (
		<div className={styles.headerMap}>
			<div
				className={styles.headerMap__loader}
				style={{
					opacity: !isLoaded ? '1' : '0',
				}}
			/>
			<iframe
				src='https://yandex.com/map-widget/v1/?ll=74.638673%2C42.849312&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTQxNTk4NzEzEjzQmtGL0YDQs9GL0LfRgdGC0LDQvSwg0JHQuNGI0LrQtdC6LCDQotC-0qMg0LrTqdGH06nRgdKvLCAxMjQiCg0AR5VCFbJlK0I%2C&z=16.85'
				allowFullScreen
				style={{
					opacity: isLoaded ? '1' : '0',
					position: 'relative',
					border: 'none',
				}}
				onLoad={handleLoad}
			></iframe>
		</div>
	)
}
