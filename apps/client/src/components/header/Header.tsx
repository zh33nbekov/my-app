'use client'

import { HEADER_LINKS } from '@/constants'
import { Button } from '@packages/shared'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { BurgerMenu, Close } from '../../../public/icons'
import { HeaderMap } from '../header-map/HeaderMap'
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher'
import styles from './header.module.scss'

const Backdrop = dynamic(() => import('../UI').then((module) => module.Backdrop), {
	ssr: false,
})
const HeaderDrawer = dynamic(() => import('../index').then((module) => module.HeaderDrawer), {
	ssr: false,
})

export const Header = () => {
	const locale = useLocale()
	const router = useRouter()
	const tHeader = useTranslations('Header')
	const [isOpen, setIsOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const [language, setLanguage] = useState(locale)

	const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
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

	return (
		<header className={clsx(styles.header, { [styles.active]: isVisible })}>
			<nav className={styles.header__nav}>
				<ul className={styles.header__list}>
					{HEADER_LINKS.map(({ label, path }) => (
						<li key={label} className={styles.header__item}>
							<Link
								href={`#${path}`}
								className={clsx(styles.header__link, {
									[styles.active]: 'about' === path,
								})}
							>
								{tHeader(label)}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.header__actions}>
				<LanguageSwitcher language={language} onChangeLanguage={changeLanguage} />
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
										<Link
											href={`#${path}`}
											className={clsx(styles.header__mobileLink, {
												[styles.active]: '',
											})}
										>
											{tHeader(label)}
										</Link>
									</li>
								))}
							</ul>
							<HeaderMap />
						</nav>
					</HeaderDrawer>
				</>
			)}
		</header>
	)
}
