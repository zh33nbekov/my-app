'use client'
import { useState } from 'react'

export const useDrawer = () => {
	const [isDrawerVisible, setDrawerVisible] = useState(false)
	const showDrawer = () => setDrawerVisible(true)
	const hideDrawer = () => setDrawerVisible(false)

	return {
		isDrawerVisible,
		showDrawer,
		hideDrawer,
	}
}
