'use client'

import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import clsx from 'clsx'
import { SKILLS } from '../../constants/skills'
import styles from './skills.module.scss'

const categorySet = new Set<string>()

for (const skill of SKILLS) {
	if (skill.category) {
		categorySet.add(skill.category)
	}
}

const categories = Array.from(categorySet)

export const Skills = () => (
	<section id={HEADER_LINKS_OPTIONS.SKILLS.PATH} className={styles.skills}>
		<SectionTitle title='Skills' width='100' positionRight={true} />
		<div className={styles.scrollContainer}>
			{categories.map((category, index) => {
				category = category.toLowerCase()
				const filteredSkills = SKILLS.filter(
					(skill) => skill.category.toLowerCase() === category
				)
				const isEven = index % 2 === 0

				return (
					<div
						key={category}
						className={clsx(
							styles.iconWrapper,
							{ [styles.toLeft]: isEven },
							{ [styles.toRight]: !isEven }
						)}
					>
						{filteredSkills.map((skill) => (
							<div key={skill.name} className={styles.skill}>
								<div className={styles.skill__icon}>
									<skill.icon />
								</div>
								<h4 className={styles.skill__name}>{skill.name}</h4>
							</div>
						))}
					</div>
				)
			})}
		</div>
		<DecorativeElement className={styles.decorativeElement} />
	</section>
)
