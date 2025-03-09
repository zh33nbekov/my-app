'use client'

import { useCallback, useState } from 'react'

export const useChat = () => {
	const [isChatVisible, setChatVisible] = useState<boolean>(false)
	const [animationClass, setAnimationClass] = useState<string>('')
	const showChat = useCallback(() => setChatVisible(true), [])
	const hideChat = useCallback(() => {
		setAnimationClass('closed')
		const timeoutId = setTimeout(() => {
			setChatVisible(false)
			setAnimationClass('')
		}, 300)

		return () => clearTimeout(timeoutId)
	}, [])
	return { isChatVisible, animationClass, showChat, hideChat }
}
