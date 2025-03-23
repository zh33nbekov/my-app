import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import styles from './certifications.module.scss'

export const Certifications = () => (
	<section className={styles.certifications}>
		<SectionTitle title='Certifications' width='0' />
		<DecorativeElement className={styles.decorativeElement} />
	</section>
)
