import styles from './skill-item.module.scss'

interface ISkillItem {
	skillName: string
	skillIcon: React.ElementType
}

export const SkillItem = ({ skillIcon: SkillIcon, skillName }: ISkillItem) => (
	<div className={styles.skillItem}>
		<SkillIcon />
		<h3 className={styles.skillItem__name}>{skillName}</h3>
	</div>
)
