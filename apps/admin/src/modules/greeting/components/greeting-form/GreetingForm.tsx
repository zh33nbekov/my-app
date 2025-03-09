import { Button, LanguageSwitcher } from '@/components'
import { memo } from 'react'
import {
	EditGreetingFields,
	GreetingButtons,
	GreetingDescription,
	GreetingImage,
	GreetingMessage,
	GreetingSubtitle,
	GreetingTitle,
	IGreeting,
} from '../../index'
import styles from './greeting-form.module.scss'

interface IGreetingForm {
	isActive: boolean
	isChanged: boolean
	isLoading: boolean
	selectedImage: string
	selectedLanguage: string
	editedGreeting: IGreeting
	isEdit: { [key: string]: boolean }
	onEnableEditing: (field: EditGreetingFields) => void
	onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
	onDisableEditing: (field: EditGreetingFields) => () => void
	onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
	onChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
	onTextAreaFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const GreetingForm: React.FC<IGreetingForm> = memo((props) => (
	<form name='greetingForm' className={styles.greetingForm} onSubmit={props.onSubmit}>
		<div className={styles.greetingForm__content}>
			<div className={styles.greetingForm__leftContent}>
				<GreetingImage
					isFetchLoad={props.isLoading}
					image={props.editedGreeting.image}
					selectedImage={props.selectedImage}
					onChangeImage={props.onChangeImage}
				/>
				<br />
				<GreetingMessage
					isEditing={props.isEdit.message}
					onInputChange={props.onInputChange}
					message={props.editedGreeting.message}
					onEnableEditing={props.onEnableEditing}
					onDisableEditing={props.onDisableEditing}
				/>
				<GreetingTitle
					isEditing={props.isEdit.title}
					title={props.editedGreeting.title}
					onInputChange={props.onInputChange}
					onEnableEditing={props.onEnableEditing}
					onDisableEditing={props.onDisableEditing}
				/>
				<GreetingSubtitle
					isEditing={props.isEdit.subtitle}
					onInputChange={props.onInputChange}
					onEnableEditing={props.onEnableEditing}
					subtitle={props.editedGreeting.subtitle}
					onDisableEditing={props.onDisableEditing}
				/>
			</div>
			<div className={styles.greetingForm__separator} />
			<div className={styles.greetingForm__rightContent}>
				<LanguageSwitcher
					selectedLanguage={props.selectedLanguage}
					onChangeLanguage={props.onChangeLanguage}
				/>
				<GreetingDescription
					onFocus={props.onTextAreaFocus}
					onInputChange={props.onInputChange}
					isEditing={props.isEdit.description}
					onEnableEditing={props.onEnableEditing}
					onDisableEditing={props.onDisableEditing}
					description={props.editedGreeting.description}
				/>
				<GreetingButtons
					isActive={props.isActive}
					onInputChange={props.onInputChange}
					buttons={props.editedGreeting.buttons}
					onEnableEditing={props.onEnableEditing}
					onDisableEditing={props.onDisableEditing}
					leftButtonLinkEditing={props.isEdit.leftButtonLink}
					rightButtonLinkEditing={props.isEdit.rightButtonLink}
					leftButtonTitleEditing={props.isEdit.leftButtonTitle}
					rightButtonTitleEditing={props.isEdit.rightButtonTitle}
				/>
				<Button
					isLoading={props.isLoading}
					isDisabled={props.isLoading || !props.isChanged}
					className={styles.greetingForm__submit}
				>
					Сохранить
				</Button>
			</div>
		</div>
	</form>
))

GreetingForm.displayName = 'GreetingForm'
