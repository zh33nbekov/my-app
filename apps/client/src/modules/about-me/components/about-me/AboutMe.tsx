import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import Image from 'next/image'
import { getAbout } from '../../index'
import styles from './about-me.module.scss'

export const AboutMe: React.FC = async () => {
	const about = await getAbout()

	return (
		<section id={HEADER_LINKS_OPTIONS.ABOUT.PATH} className={styles.aboutMe}>
			<DecorativeElement className={`${styles.decorativeElement} ${styles.first}`} />
			<SectionTitle title='AboutMe' width='100' positionRight />
			<div className={styles.aboutMe__info}>
				<div className={styles.aboutMe__image}>
					<Image src={about.image} width='380' height='380' alt='Обо мне' priority />
				</div>
				<p className={styles.aboutMe__description}>{about?.description}</p>
			</div>
			<DecorativeElement className={`${styles.decorativeElement} ${styles.second}`} />
		</section>
	)
}
