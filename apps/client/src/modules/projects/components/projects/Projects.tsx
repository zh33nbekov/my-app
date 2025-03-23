'use client'

import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { ProjectsButtons } from '../../index'
import styles from './projects.module.scss'

export const Projects = () => (
	<>
		<section id={HEADER_LINKS_OPTIONS.PROJECTS.PATH} className={styles.projects}>
			<DecorativeElement className={styles.decorativeElement} />
			<SectionTitle title='Projects' width='0' />
			<ProjectsButtons />
		</section>
	</>
)
