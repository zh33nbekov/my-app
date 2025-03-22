'use client'

import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { Button } from '@packages/shared'
import { useTranslations } from 'next-intl'
import { EXPERIENCE_BUTTONS } from '../../constants'
import styles from './experience.module.scss'

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
			<DecorativeElement className={styles.decorativeElement} />
		</section>
	)
}
