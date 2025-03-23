import { Skill } from '../constants/skills'

export const getFilteredSkills = (skills: Skill[]) => {
	const categorySet = new Set<string>()

	// Собираем уникальные категории
	skills.forEach((skill) => {
		if (skill.category) {
			categorySet.add(skill.category.toLowerCase())
		}
	})

	const categories = Array.from(categorySet)

	// Формируем массив массивов с навыками и индексами для стилизации
	const filteredSkills = categories.map((category, index) => {
		const skillsByCategory = skills.filter((skill) => skill.category.toLowerCase() === category)

		return {
			category,
			skills: [...skillsByCategory, ...skillsByCategory], // Дублируем для плавного скролла
			isEven: index % 2 === 0,
		}
	})

	return filteredSkills
}
