'use client'

import { useState } from 'react'
import { EXPERIENCE_TABS } from '../index'

export const useExperienceTabs = () => {
	const [isActiveTab, setActiveTab] = useState(0)

	const changeActiveTabHandler = (index: number) => {
		setActiveTab(index)
	}

	return {
		active: isActiveTab,
		changeActiveTabHandler,
		ActiveTab: EXPERIENCE_TABS[isActiveTab].сomponent,
	}
}
