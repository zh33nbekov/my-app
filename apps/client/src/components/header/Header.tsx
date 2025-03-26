'use client'

import { HEADER_LINKS } from '@/constants'
// import { useHeaderDrawer } from '@/hooks'
import { useHeaderDrawer } from '@/hooks'
import { Button } from '@packages/shared'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BurgerMenu, Close, Resume } from '../../../public/icons'
import { HeaderMap } from '../header-map/HeaderMap'
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher'
import styles from './header.module.scss'

const Backdrop = dynamic(() => import('../UI').then((module) => module.Backdrop), { ssr: false })
const HeaderDrawer = dynamic(() => import('../index').then((module) => module.HeaderDrawer), {
	ssr: false,
})

export const Header = () => {
	const locale = useLocale()
	const router = useRouter()
	const tHeader = useTranslations('Header')
	const [language, setLanguage] = useState(locale)
	const { isVisible, animationClass, handleClose, handleToggle, handleAnimationEnd } =
		useHeaderDrawer()

	const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
		setLanguage(value)
		router.replace(value)
	}

	return (
		<header className={clsx(styles.header, { [styles.active]: isVisible })}>
			<nav className={styles.header__nav}>
				<ul className={styles.header__list}>
					{HEADER_LINKS.map(({ label, path }) => (
						<li key={label} className={styles.header__item}>
							<NextLink href={`#${path}`} className={styles.header__link}>
								{tHeader(label)}
							</NextLink>
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.header__actions}>
				<LanguageSwitcher language={language} onChangeLanguage={changeLanguage} />
				<a
					download={true}
					href='/rai-zheenbekov.pdf'
					aria-label='Download my resume'
					className={styles.header__resume}
				>
					<span className={styles.srOnly}>Download my resume</span>
					<Resume />
				</a>
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
										<NextLink href={`#${path}`} className={styles.header__mobileLink}>
											{tHeader(label)}
										</NextLink>
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
