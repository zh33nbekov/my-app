'use client'

import { SOCIAL_LINKS } from '@/constants'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './social-links.module.scss'

export const SocialLinks = () => {
	const [rootSocialLinks, setRootSocialLink] = useState<HTMLElement | null>(null)

	useEffect(() => {
		if (!rootSocialLinks) {
			setRootSocialLink(document.getElementById('social-links'))
		}
	}, [rootSocialLinks])

	if (!rootSocialLinks) return null

	return createPortal(
		<ul className={styles.socialLinks}>
			{SOCIAL_LINKS.map((elem, index) => (
				<li key={index} className={styles.socialLinks__item}>
					<a href={elem.link} target='_blank' className={styles.socialLinks__link}>
						<span className={styles.socialLinks__label}>{elem.label}</span>
						<elem.icon />
					</a>
				</li>
			))}
		</ul>,
		rootSocialLinks
	)
}
