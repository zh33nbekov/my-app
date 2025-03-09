'use client'

import { NAVIGATION_LINKS, NAVIGATION_SECTIONS_LINKS } from '@/constants/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { NavigationIcon } from '../index'
import styles from './navigation.module.scss'

type LinkType = 'nav' | 'additionally'

export const Navigation = () => {
	const [linksState, setLinksState] = useState<Record<LinkType, boolean>>({
		nav: false,
		additionally: false,
	})
	const [ulHeight, setUlHeight] = useState<number>(0)
	const ulRef = useRef<HTMLUListElement>(null)
	const pathname = usePathname()

	const toggleNavLinks = (field: LinkType) => () => {
		setLinksState((prev) => ({ ...prev, [field]: !prev[field] }))
	}

	return (
		<nav className={styles.navigation}>
			<div className={styles.navigation__group}>
				<div className={styles.group__header} onClick={toggleNavLinks('nav')}>
					<button className={styles.group__button}>
						<NavigationIcon isOpen={linksState.nav} />
					</button>
					<h3 className={styles.group__title}>Секции</h3>
				</div>
				{linksState.nav && (
					<ul ref={ulRef} className={`${styles.group__list}`}>
						{NAVIGATION_SECTIONS_LINKS.map(({ label, path }) => (
							<li
								key={label}
								className={`${styles.group__item} ${path === pathname && styles.active}`}
							>
								<Link className={styles.group__link} href={path}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className={styles.line} />
			<div className={styles.navigation__group}>
				<div className={styles.group__header} onClick={toggleNavLinks('additionally')}>
					<button className={styles.group__button}>
						<NavigationIcon isOpen={linksState.additionally} />
					</button>
					<h3 className={styles.group__title}>Дополнительно</h3>
				</div>
				{linksState.additionally && (
					<ul className={`${styles.group__list} ${linksState.additionally && styles.active}`}>
						{NAVIGATION_LINKS.map(({ label, path }) => (
							<li
								key={label}
								className={`${styles.group__item} ${path === pathname && styles.active}`}
							>
								<Link className={styles.group__link} href={path}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className={styles.line} />
		</nav>
	)
}
