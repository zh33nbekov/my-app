import { useState } from 'react'

export const useHeaderDrawer = () => {
	const [isDrawerVisible, setIsDrawerVisible] = useState(false)
	const showDrawer = () => setIsDrawerVisible(true)
	const hideDrawer = () => setIsDrawerVisible(false)

	return {
		showDrawer,
		hideDrawer,
		isDrawerVisible,
	}
}
