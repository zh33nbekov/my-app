'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Instagram, Linkedin, SocialGitHub } from '../../../public/icons'
import styles from './social-links.module.scss'

const SOCIAL_LINKS = [
	{ icon: Instagram, link: 'https://www.instagram.com/zh.rai333' },
	{ icon: Linkedin, link: 'https://www.linkedin.com/in/rai-zheenbekov-087b81354/' },
	{ icon: SocialGitHub, link: 'https://github.com/zh33nbekov' },
] as const

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
						<elem.icon />
					</a>
				</li>
			))}
		</ul>,
		rootSocialLinks
	)
}
