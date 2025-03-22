'use client'

import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { useEffect, useState } from 'react'
import { ProjectsButtons } from '../../index'
import styles from './projects.module.scss'

export const Projects = () => {
	// const [style, setStyle] = useState({
	// 	top: '50%',
	// 	left: '50%',
	// })

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setStyle({
	// 			top: `${Math.random() * 100}%`,
	// 			left: `${Math.random() * 100}%`,
	// 		})
	// 	}, 2000)

	// 	return () => clearInterval(interval)
	// }, [])

	return (
		<>
			<section id={HEADER_LINKS_OPTIONS.PROJECTS.PATH} className={styles.projects}>
				<DecorativeElement className={styles.decorativeElement} style={{ top: '' }} />
				<SectionTitle title='Projects' width='0' />
				<ProjectsButtons />
				{/* <DecorativeElement
					position='fixed'
					style={{ ...style }}
					className={styles.decorative}
				/> */}
			</section>
		</>
	)
}
