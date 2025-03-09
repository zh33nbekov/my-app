'use client'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import styles from './section-title.module.scss'

interface ISectionTitle {
	title: string
	width: string
	positionRight?: true | undefined
}

export const SectionTitle: React.FC<ISectionTitle> = memo(({ title, width, positionRight }) => {
	const t = useTranslations('SectionTitles')
	return (
		<div className={styles.sectionTitle}>
			<h3 className={styles.title} style={positionRight && { marginLeft: 'auto' }}>
				{t(title)}
			</h3>
			<div className={styles.progress}>
				<div className={styles.progress__right} style={{ width: `${width}%` }} />
				<div className={styles.progress__left} />
			</div>
		</div>
	)
})

SectionTitle.displayName = 'SectionTitle'
