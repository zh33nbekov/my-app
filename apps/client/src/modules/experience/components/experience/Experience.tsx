'use client'

import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { Button } from '@packages/shared'
import { useTranslations } from 'next-intl'
import { EXPERIENCE_TABS, useExperienceTabs } from '../../index'
import styles from './experience.module.scss'

export const Experience = () => {
	const t = useTranslations('Experience')
	const { active, changeActiveTabHandler, ActiveTab } = useExperienceTabs()

	return (
		<section id={HEADER_LINKS_OPTIONS.EXPERIENCE.PATH} className={styles.experience}>
			<SectionTitle title='Experience' width='100' positionRight />
			<div style={{ display: 'flex', gap: '44px', paddingTop: '44px' }}>
				{EXPERIENCE_TABS.map(({ label }, index) => (
					<Button
						key={label}
						active={active === index}
						onClick={() => changeActiveTabHandler(index)}
					>
						{t(label)}
					</Button>
				))}
			</div>
			<div className={styles.experience__tab}>
				<ActiveTab />
			</div>
			<DecorativeElement className={styles.decorativeElement} />
		</section>
	)
}
