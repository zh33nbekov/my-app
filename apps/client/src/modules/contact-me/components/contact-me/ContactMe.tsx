import { SectionTitle } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { HEADER_LINKS_OPTIONS } from '@/constants'
import Image from 'next/image'
import { FeedbackForm, getContact } from '../../index'
import styles from './contact-me.module.scss'

export const ContactMe = async () => {
	const contact = await getContact()

	return (
		<section id={HEADER_LINKS_OPTIONS.CONTACT.PATH} className={styles.contactMe}>
			<SectionTitle title='ContactMe' width='100' />
			<div className={styles.contactMe__content}>
				<div className={styles.contactMe__image}>
					<Image src={contact.image} width='360' height='360' alt='Связаться со мной' />
				</div>
				<FeedbackForm />
			</div>
			<DecorativeElement className={styles.decorativeElement} />
		</section>
	)
}
