'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './header-drawer.module.scss'

interface IHeaderDrawer {
	children: React.ReactNode
	animationClass: 'opened' | 'closed' | ''
	onHandleAnimationEnd: (e: React.AnimationEvent<HTMLDivElement>) => void
}

export const HeaderDrawer: React.FC<IHeaderDrawer> = (props) => {
	const [rootHeaderDrawer, setRootHeaderDrawer] = useState<HTMLElement | null>(null)

	useEffect(() => {
		if (!rootHeaderDrawer) {
			setRootHeaderDrawer(document.getElementById('header-drawer'))
		}
	}, [rootHeaderDrawer])

	if (!rootHeaderDrawer) return null

	return createPortal(
		<div
			onAnimationEnd={props.onHandleAnimationEnd}
			className={`${styles.headerDrawer} ${styles[props.animationClass]}`}
		>
			{props.children}
		</div>,
		rootHeaderDrawer
	)
}
