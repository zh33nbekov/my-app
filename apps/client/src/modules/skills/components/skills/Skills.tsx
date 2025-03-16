'use client'

import { SectionTitle, Slider } from '@/components'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import { useCallback, useState } from 'react'
import { SkillItem, SKILLS, SkillsCategory, SkillsCategoryTypes } from '../../index'
import styles from './skills.module.scss'

const filteringSkills = (skillCategory: SkillsCategoryTypes) => {
	if (skillCategory === 'all') {
		return SKILLS
	}
	return SKILLS.filter((skill) => skill.category === skillCategory)
}

export const Skills = () => {
	const [skill, setSkill] = useState(0)
	const [skillCategory, setSkillCategory] = useState<SkillsCategoryTypes>('all')
	const filteredSkillsLength = filteringSkills(skillCategory).length
	const changeSkillCategory = useCallback((checkedSkillCategory: SkillsCategoryTypes) => {
		setSkill(0)
		setSkillCategory(checkedSkillCategory)
	}, [])
	const nextSkill = () => {
		setSkill((prevIndex) => (prevIndex + 1) % filteredSkillsLength)
	}
	const prevSkill = () => {
		setSkill((prevIndex) => (prevIndex - 1 + filteredSkillsLength) % filteredSkillsLength)
	}
	const { icon } = filteringSkills(skillCategory)[skill] ?? {
		icon: () => null,
	}

	return (
		<section id={HEADER_LINKS_OPTIONS.SKILLS.PATH} className={styles.skills}>
			<SectionTitle title='Skills' width='100' positionRight={true} />
			<SkillsCategory
				onChangeSkillCategory={changeSkillCategory}
				currentSkillCategory={skillCategory}
			/>
			<Slider nextSlide={nextSkill} prevSlide={prevSkill}>
				<SkillItem skillIcon={icon} />
			</Slider>
		</section>
	)
}
