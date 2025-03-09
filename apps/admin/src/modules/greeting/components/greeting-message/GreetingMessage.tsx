'use client'

import { EditableText } from '@/components'
import { useInput } from '@/hooks'
import { memo } from 'react'
import { EditGreetingFields } from '../../index'

interface IGreetingMessage {
	message: string
	isEditing: boolean
	onEnableEditing: (field: EditGreetingFields) => void
	onDisableEditing: (field: EditGreetingFields) => () => void
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const GreetingMessage: React.FC<IGreetingMessage> = memo((props) => {
	const { inputWidth, editableTextRef, changeInputWidth } = useInput()

	return (
		<EditableText
			minLength={5}
			maxLength={8}
			fieldName='message'
			value={props.message}
			inputWidth={inputWidth}
			isEditing={props.isEditing}
			EditableTextRef={editableTextRef}
			changeInputWidth={changeInputWidth}
			onInputChange={props.onInputChange}
			onEnableEditing={props.onEnableEditing}
			onDisableEditing={props.onDisableEditing}
		/>
	)
})

GreetingMessage.displayName = 'GreetingMessage'
