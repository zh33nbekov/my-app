'use client'

import { Button, LanguageSwitcher } from '@/components'
import { AboutDescription, AboutImage, EditAboutFields } from '../../index'
import styles from './about-form.module.scss'

interface IAboutForm {
	isChanged: boolean
	isLoading: boolean
	isSuccess: boolean
	description: string
	image: string | File
	selectedImage: string
	selectedLanguage: string
	isEdit: { [key: string]: boolean }
	onEnableEditing: (field: EditAboutFields) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	onDisableEditing: (field: EditAboutFields) => () => void
	onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
	onChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
	handleTextareaFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void
	onInputChange: (
		e: React.ChangeEvent<HTMLTextAreaElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const AboutForm: React.FC<IAboutForm> = (props) => (
	<>
		{props.isSuccess && (
			<form className={styles.aboutForm} onSubmit={props.onSubmit}>
				<AboutImage
					image={props.image}
					selectedImage={props.selectedImage}
					onChangeImage={props.onChangeImage}
				/>
				<div className={styles.aboutForm__separator} />
				<div className={styles.aboutForm__content}>
					<LanguageSwitcher
						language={props.selectedLanguage}
						onChangeLanguage={props.onChangeLanguage}
					/>
					<AboutDescription
						description={props.description}
						onFocus={props.handleTextareaFocus}
						onInputChange={props.onInputChange}
						isEditing={props.isEdit.description}
						onEnableEditing={props.onEnableEditing}
						onDisableEditing={props.onDisableEditing}
					/>
					<Button
						isLoading={props.isLoading}
						disabled={!props.isChanged}
						className={styles.aboutForm__submit}
					>
						Сохранить
					</Button>
				</div>
			</form>
		)}
	</>
)
