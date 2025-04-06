import { Button } from '@/components'
import { ContactImage, IContact } from '../../index'
import styles from './contact-form.module.scss'

interface IContactForm {
	isChanged: boolean
	isLoading: boolean
	selectedImage: string
	editedContact: IContact
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ContactForm: React.FC<IContactForm> = (props) => (
	<form name='contactForm' className={styles.contactForm} onSubmit={props.onSubmit}>
		<ContactImage
			isFetchLoad
			image={props.editedContact.image}
			selectedImage={props.selectedImage}
			onChangeImage={props.onChangeImage}
		/>
		<div className={styles.contactForm__separator} />
		<div className={styles.contactForm__content}>
			<Button
				disabled={props.isLoading || !props.isChanged}
				isLoading={props.isLoading}
				className={styles.contactForm__submit}
			>
				Сохранить
			</Button>
		</div>
	</form>
)
