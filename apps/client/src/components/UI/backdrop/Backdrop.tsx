'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './backdrop.module.scss'

interface IBackdrop {
	onClose: () => void
	animationClass: string
}

export const Backdrop: React.FC<IBackdrop> = ({ onClose, animationClass }) => {
	const [rootBackdrop, setRootBackdrop] = useState<HTMLElement | null>(null)

	useEffect(() => {
		setRootBackdrop(document.getElementById('backdrop'))
	}, [])

	if (!rootBackdrop) return null

	return createPortal(
		<div className={`${styles.backdrop} ${styles[animationClass]}`} onClick={onClose} />,
		rootBackdrop
	)
}
