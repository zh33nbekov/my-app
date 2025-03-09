'use client'
import { useState } from 'react'

export const useSidebar = () => {
	const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true)
	const [animationClasses, setAnimationClasses] = useState({
		open: '',
		close: '',
	})
	const showSidebar = () => {
		setAnimationClasses((prevState) => ({ ...prevState, open: 'opened', close: '' }))
		setSidebarVisible(true)
	}
	const hideSidebar = () => {
		setAnimationClasses((prevState) => ({ ...prevState, open: '', close: 'closed' }))
		const timeoutId = setTimeout(() => {
			setSidebarVisible(false)
		}, 215)
		return () => clearTimeout(timeoutId)
	}

	return {
		isSidebarVisible,
		showSidebar,
		hideSidebar,
		opened: animationClasses.open,
		closed: animationClasses.close,
	}
}
