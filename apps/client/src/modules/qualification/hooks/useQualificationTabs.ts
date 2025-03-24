'use client'

import { useState } from 'react'
import { QUALIFICATION_TABS } from '../constants'

export const useQualificationTabs = () => {
	const [isActiveTab, setActiveTab] = useState(0)

	const changeActiveTabHandler = (index: number) => {
		setActiveTab(index)
	}

	return {
		active: isActiveTab,
		changeActiveTabHandler,
		ActiveTab: QUALIFICATION_TABS[isActiveTab].component,
	}
}
