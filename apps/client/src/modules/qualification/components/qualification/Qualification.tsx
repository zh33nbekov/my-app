'use client'

import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { Button } from '@packages/shared'
import { useTranslations } from 'next-intl'
import { QUALIFICATION_TABS, useQualificationTabs } from '../../index'
import styles from './qualification.module.scss'

export const Qualification = () => {
	const t = useTranslations('Qualification')
	const { active, changeActiveTabHandler, ActiveTab } = useQualificationTabs()

	return (
		<section id={HEADER_LINKS_OPTIONS.QUALIFICATION.PATH} className={styles.qualification}>
			<SectionTitle title='Qualification' width='100' positionRight />
			<div style={{ display: 'flex', gap: '44px', padding: '44px 0 15px' }}>
				{QUALIFICATION_TABS.map(({ label }, index) => (
					<Button
						key={label}
						active={active === index}
						onClick={() => changeActiveTabHandler(index)}
					>
						{t(label)}
					</Button>
				))}
			</div>
			<div className={styles.qualification__tab}>
				<ActiveTab />
			</div>
			<DecorativeElement className={styles.decorativeElement} />
		</section>
	)
}
