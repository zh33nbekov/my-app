'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './backdrop.module.scss'

interface IBackdrop {
	onClose: () => void
	animationClass: 'opened' | 'closed'
}

export const Backdrop: React.FC<IBackdrop> = ({ onClose, animationClass }) => {
	const [isMounted, setIsMounted] = useState(false)
	const [rootBackdrop, setRootBackdrop] = useState<HTMLElement | null>(null)

	useEffect(() => {
		setIsMounted(true)
		setRootBackdrop(document.getElementById('backdrop'))

		return () => setIsMounted(false)
	}, [])

	if (!isMounted || !rootBackdrop) return null

	return createPortal(
		<div className={`${styles.backdrop} ${styles[animationClass]}`} onClick={onClose} />,
		rootBackdrop
	)
}
