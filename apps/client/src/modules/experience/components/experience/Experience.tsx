'use client'

import { SectionTitle } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { Button } from '@packages/shared'
import { useTranslations } from 'next-intl'
import styles from './experience.module.scss'

const EXPERIENCE_BUTTONS = [
	{
		LABEL: 'Experience',
	},
	{
		LABEL: 'Education',
	},
]

export const Experience = () => {
	const t = useTranslations('Experience')

	return (
		<section id={HEADER_LINKS_OPTIONS.EXPERIENCE.PATH} className={styles.experience}>
			<SectionTitle title='Experience' width='100' positionRight />
			<div style={{ display: 'flex', gap: '44px', paddingTop: '44px' }}>
				{EXPERIENCE_BUTTONS.map(({ LABEL }) => (
					<Button key={LABEL}>{t(LABEL)}</Button>
				))}
			</div>
		</section>
	)
}
