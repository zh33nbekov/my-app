'use client'

import { EditGreetingFields } from '@/modules/greeting'
import { memo, useCallback } from 'react'
import styles from './editable-text.module.scss'

interface IEditableText {
	value: string
	minLength: number
	maxLength: number
	inputWidth: number
	isEditing: boolean
	fieldName: EditGreetingFields
	changeInputWidth: (offsetWidth: number) => void
	onEnableEditing: (fieldName: EditGreetingFields) => void
	EditableTextRef: React.RefObject<HTMLHeadingElement | null>
	onDisableEditing: (fieldName: EditGreetingFields) => () => void
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const EditableText: React.FC<IEditableText> = memo((props) => {
	const inputHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		props.onInputChange(e, props.minLength, props.maxLength)
	}, [])

	return (
		<>
			{props.isEditing ? (
				<input
					type='text'
					value={props.value}
					name={props.fieldName}
					autoFocus={!!props.value}
					onChange={inputHandleChange}
					style={{ width: props.inputWidth }}
					className={styles.editableTextInput}
					onBlur={props.onDisableEditing(props.fieldName)}
				/>
			) : (
				<h2
					id={props.fieldName}
					ref={props.EditableTextRef}
					className={styles.editableText}
					onClick={() => {
						props.onEnableEditing(props.fieldName)
						if (props.EditableTextRef.current) {
							props.changeInputWidth(props.EditableTextRef.current.offsetWidth)
						}
					}}
				>
					{props.value}
				</h2>
			)}
		</>
	)
})

EditableText.displayName = 'EditableText'
