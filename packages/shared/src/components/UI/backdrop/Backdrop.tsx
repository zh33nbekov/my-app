'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './backdrop.module.scss'

export const Backdrop = () => {
	const [isMounted, setMounted] = useState(true)
	const rootBackdrop: HTMLElement | null = document.getElementById('backdrop')

	useEffect(() => {
		setMounted(true)

		return () => setMounted(false)
	}, [])

	if (!isMounted || !rootBackdrop) return null

	return createPortal(<div className={styles.backdrop} />, rootBackdrop)
}
