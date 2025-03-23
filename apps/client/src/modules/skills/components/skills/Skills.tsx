import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import clsx from 'clsx'
import { getFilteredSkills, SKILLS } from '../../index'
import styles from './skills.module.scss'

export const Skills = () => {
	const filteredSkills = getFilteredSkills(SKILLS)

	return (
		<section id={HEADER_LINKS_OPTIONS.SKILLS.PATH} className={styles.skills}>
			<SectionTitle title='Skills' width='100' positionRight={true} />
			<div className={styles.scrollContainer}>
				{filteredSkills.map(({ category, skills, isEven }) => (
					<div
						key={category}
						className={clsx(
							styles.iconWrapper,
							{ [styles.toLeft]: isEven },
							{ [styles.toRight]: !isEven }
						)}
					>
						{skills.map((skill, index) => (
							<div key={`${skill.name}-${index}`} className={styles.skill}>
								<div className={styles.skill__icon}>
									<skill.icon />
								</div>
								<h4 className={styles.skill__name}>{skill.name}</h4>
							</div>
						))}
					</div>
				))}
			</div>
			<DecorativeElement className={styles.decorativeElement} />
		</section>
	)
}
