import { Skill } from '../constants/skills'

export const getFilteredSkills = (skills: Skill[]) => {
	const categorySet = new Set<string>()
	skills.forEach((skill) => {
		if (skill.category) {
			categorySet.add(skill.category.toLowerCase())
		}
	})

	const categories = Array.from(categorySet)
	const filteredSkills = categories.map((category, index) => {
		const skillsByCategory = skills.filter((skill) => skill.category.toLowerCase() === category)

		return {
			category,
			skills: [...skillsByCategory, ...skillsByCategory],
			isEven: index % 2 === 0,
		}
	})

	return filteredSkills
}
