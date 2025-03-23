'use client'

import { useEffect, useState } from 'react'
import styles from './theme-switcher.module.scss'

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>(
		() => (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
	)

	useEffect(() => {
		if (theme === 'dark') {
			document.body.setAttribute('data-theme', 'dark')
		} else {
			document.body.setAttribute('data-theme', 'light')
		}
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<button
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			className={styles.themeSwitcher}
		>
			{/* {theme === 'light' ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />} */}
			Click
		</button>
	)
}

export default ThemeSwitcher
