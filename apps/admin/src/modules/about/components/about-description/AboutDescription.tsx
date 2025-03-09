import { memo } from 'react'
import { EditAboutFields } from '../../index'
import styles from './about-description.module.scss'

interface IAboutDescription {
	isEditing: boolean
	description: string
	onEnableEditing: (field: EditAboutFields) => void
	onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void
	onDisableEditing: (field: EditAboutFields) => () => void
	onInputChange: (
		e: React.ChangeEvent<HTMLTextAreaElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const AboutDescription: React.FC<IAboutDescription> = memo((props) => {
	const inputHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.onInputChange(e, 500, 500)
	}

	return (
		<div className={styles.aboutDescriptionBox}>
			{props.isEditing ? (
				<textarea
					name='description'
					onFocus={props.onFocus}
					value={props.description}
					onChange={inputHandleChange}
					className={styles.aboutDescriptionInput}
					autoFocus={props.description ? true : false}
					onBlur={props.onDisableEditing('description')}
				/>
			) : (
				<h2
					className={styles.aboutDescription}
					onClick={() => props.onEnableEditing('description')}
				>
					{props.description}
				</h2>
			)}
		</div>
	)
})

AboutDescription.displayName = 'AboutDescription'
