'use client'

import { useCallback, useState } from 'react'

export interface IUseHeaderDrawer {
	isVisible: boolean
	handleClose: () => void
	handleToggle: () => void
	handleAnimationEnd: () => void
	animationClass: 'opened' | 'closed'
}

export const useHeaderDrawer = (): IUseHeaderDrawer => {
	const [isOpen, setIsOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false)

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

	return { isVisible, animationClass, handleToggle, handleClose, handleAnimationEnd }
}
