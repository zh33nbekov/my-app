import { EditableText } from '@/components'
import { useInput } from '@/hooks'
import { memo } from 'react'
import { EditGreetingFields } from '../../index'

interface IGreetingTitle {
	title: string
	isEditing: boolean
	onEnableEditing: (field: EditGreetingFields) => void
	onDisableEditing: (field: EditGreetingFields) => () => void
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const GreetingTitle: React.FC<IGreetingTitle> = memo((props) => {
	const { inputWidth, editableTextRef, changeInputWidth } = useInput()

	return (
		<EditableText
			minLength={7}
			maxLength={10}
			fieldName='title'
			value={props.title}
			inputWidth={inputWidth}
			isEditing={props.isEditing}
			EditableTextRef={editableTextRef}
			onInputChange={props.onInputChange}
			changeInputWidth={changeInputWidth}
			onEnableEditing={props.onEnableEditing}
			onDisableEditing={props.onDisableEditing}
		/>
	)
})

GreetingTitle.displayName = 'GreetingTitle'
