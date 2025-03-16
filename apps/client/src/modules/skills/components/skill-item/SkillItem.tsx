import styles from './skill-item.module.scss'

interface ISkillItem {
	skillIcon: React.ElementType
}

export const SkillItem = ({ skillIcon: SkillIcon }: ISkillItem) => (
	<div className={styles.skillItem}>
		<SkillIcon />
	</div>
)
