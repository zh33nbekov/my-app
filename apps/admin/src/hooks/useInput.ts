'use client'

import { useCallback, useRef, useState } from 'react'

export const useInput = () => {
	const [inputWidth, setInputWidth] = useState(0)
	const editableTextRef = useRef<HTMLHeadingElement>(null)
	const changeInputWidth = useCallback((offsetWidth: number) => {
		if (offsetWidth) {
			setInputWidth(offsetWidth)
		}
	}, [])

	return { inputWidth, editableTextRef, changeInputWidth }
}
