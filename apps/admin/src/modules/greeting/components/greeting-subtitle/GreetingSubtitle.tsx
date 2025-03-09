import { EditableText } from '@/components'
import { useInput } from '@/hooks'
import { memo } from 'react'
import { EditGreetingFields } from '../../index'

interface IGreetingSubtitle {
	subtitle: string
	isEditing: boolean
	onEnableEditing: (field: EditGreetingFields) => void
	onDisableEditing: (field: EditGreetingFields) => () => void
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const GreetingSubtitle: React.FC<IGreetingSubtitle> = memo((props) => {
	const { inputWidth, editableTextRef, changeInputWidth } = useInput()

	return (
		<EditableText
			minLength={14}
			maxLength={20}
			fieldName='subtitle'
			value={props.subtitle}
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

GreetingSubtitle.displayName = 'GreetingSubtitle'
