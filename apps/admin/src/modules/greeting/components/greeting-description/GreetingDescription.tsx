import { memo } from 'react'
import { EditGreetingFields } from '../../index'
import styles from './greeting-description.module.scss'

interface IGreetingDescription {
	isEditing: boolean
	description: string
	onEnableEditing: (field: EditGreetingFields) => void
	onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void
	onDisableEditing: (field: EditGreetingFields) => () => void
	onInputChange: (
		e: React.ChangeEvent<HTMLTextAreaElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const GreetingDescription: React.FC<IGreetingDescription> = memo((props) => {
	const inputHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.onInputChange(e, 285, 400)
	}

	return (
		<div className={styles.greetingDescriptionBox}>
			{props.isEditing ? (
				<textarea
					name='description'
					onFocus={props.onFocus}
					value={props.description}
					onChange={inputHandleChange}
					className={styles.greetingDescriptionInput}
					autoFocus={props.description ? true : false}
					onBlur={props.onDisableEditing('description')}
				/>
			) : (
				<h2
					className={styles.greetingDescription}
					onClick={() => props.onEnableEditing('description')}
				>
					{props.description}
				</h2>
			)}
		</div>
	)
})

GreetingDescription.displayName = 'GreetingDescription'
