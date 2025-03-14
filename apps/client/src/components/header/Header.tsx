'use client'

import { HEADER_LINKS } from '@/constants'
import { Button } from '@packages/shared'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BurgerMenu, Close } from '../../../public/icons'
import { Backdrop } from '../UI'
import { HeaderDrawer } from '../header-drawer/HeaderDrawer'
import styles from './header.module.scss'

const sections = HEADER_LINKS.map(({ path }) => path)

export const Header = () => {
	const tHeader = useTranslations('Header')
	const [isOpen, setIsOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const locale = useLocale()
	const router = useRouter()
	const [language, setLanguage] = useState(locale)
	const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
		console.log(value)
		setLanguage(value)
		router.replace(value)
	}

	const handleToggle = () => {
		if (!isOpen) {
			setIsVisible(true)
		}
		setIsOpen(!isOpen)
	}

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleAnimationEnd = useCallback(() => {
		if (!isOpen) {
			setIsVisible(false)
		}
	}, [isOpen])

	const animationClass = isOpen ? 'opened' : 'closed'
	const [activeSection, setActiveSection] = useState<string | null>(null)
	const observerRef = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		// Если Observer уже создан, отключаем его
		if (observerRef.current) {
			observerRef.current.disconnect()
		}

		const observerOptions = {
			root: null, // Отслеживаем относительно viewport
			/* rootMargin: '-20% 0px -50% 0px', Уменьшаем верхний offset */
			rootMargin: '-20% 0px -50% 0px', // Уменьшаем верхний offset
			threshold: 0.3, // 30% видимости достаточно
		}

		const observer = new IntersectionObserver((entries) => {
			let visibleSection = null

			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					visibleSection = entry.target.id
				}
			})

			if (visibleSection) {
				setActiveSection(visibleSection)
			}
		}, observerOptions)

		// Запоминаем observer
		observerRef.current = observer

		sections.forEach((id) => {
			const section = document.getElementById(id)
			if (section) observer.observe(section)
		})

		return () => observer.disconnect() // Очистка при размонтировании
	}, [])

	console.log('Активная секция:', activeSection)

	return (
		<header className={clsx(styles.header, { [styles.active]: isVisible })}>
			<nav className={styles.header__nav}>
				<ul className={styles.header__list}>
					{HEADER_LINKS.map(({ label, path }) => (
						<li key={label} className={styles.header__item}>
							<Link
								href={`#${path}`}
								className={clsx(styles.header__link, {
									[styles.active]: activeSection === path,
								})}
							>
								{tHeader(label)}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.header__actions}>
				<select
					id='language'
					name='language'
					value={language}
					onChange={changeLanguage}
					className={styles.header__select}
				>
					<option className={styles.header__option} value='ru'>
						RU
					</option>
					<option className={styles.header__option} value='en'>
						EN
					</option>
				</select>
				<Button
					className={styles.header__burger}
					active={isVisible}
					onClick={handleToggle}
					id='burger-menu'
					aria-label='burger-menu'
				>
					{isVisible ? <Close /> : <BurgerMenu />}
				</Button>
			</div>
			{isVisible && (
				<>
					<Backdrop onClose={handleClose} animationClass={animationClass} />
					<HeaderDrawer
						animationClass={animationClass}
						onHandleAnimationEnd={handleAnimationEnd}
					>
						<nav className={styles.header__mobileNav}>
							<ul className={styles.header__mobileList}>
								{HEADER_LINKS.map(({ label, path }) => (
									<li key={label} className={styles.header__mobileItem}>
										<Link href={`#${path}`} className={styles.header__mobileLink}>
											{tHeader(label)}
										</Link>
									</li>
								))}
							</ul>
							{/* <MyAdress /> */}src/modules/chat/components/chat/Chat.tsx
						</nav>
					</HeaderDrawer>
				</>
			)}
		</header>
	)
}

// const MyAdress = () => {
// 	const [isLoaded, setIsLoaded] = useState(false)
// 	const handleLoad = () => setIsLoaded(true)

// 	return (
// 		<>
// 			<iframe
// 				src='https://yandex.com/map-widget/v1/?ll=74.638673%2C42.849312&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTQxNTk4NzEzEjzQmtGL0YDQs9GL0LfRgdGC0LDQvSwg0JHQuNGI0LrQtdC6LCDQotC-0qMg0LrTqdGH06nRgdKvLCAxMjQiCg0AR5VCFbJlK0I%2C&z=16.85'
// 				width='560'
// 				height='200'
// 				frameBorder={1}
// 				allowFullScreen
// 				style={{ display: isLoaded ? 'block' : 'none', position: 'relative', border: 'none' }}
// 				onLoad={handleLoad}
// 			></iframe>
// 		</>
// 	)
// }
