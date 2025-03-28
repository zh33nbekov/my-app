'use client'

import { useTranslations } from 'next-intl'
import { memo, useState } from 'react'
import styles from './tooltip.module.scss'

interface ITooltip {
	text: string
	children: React.ReactNode
}

export const Tooltip: React.FC<ITooltip> = memo(({ text, children }) => {
	const [visible, setVisible] = useState(false)
	const tTooltip = useTranslations('Tooltips')
	console.log('rendered')

	return (
		<div
			className={styles.tooltip}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
		>
			{children}
			{visible && <div className={styles.tooltip__content}>{tTooltip(text)}</div>}
		</div>
	)
})

Tooltip.displayName = 'Tooltip'
