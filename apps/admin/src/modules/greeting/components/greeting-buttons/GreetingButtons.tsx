import { EditableText } from '@/components'
import { useInput } from '@/hooks'
import { memo } from 'react'
import { EditGreetingFields, IGreeting } from '../../index'
import styles from './greeting-buttons.module.scss'

type IButtons = Pick<IGreeting, 'buttons'>['buttons']

interface IGreetingButtons {
	buttons: IButtons
	isActive: boolean
	leftButtonLinkEditing: boolean
	leftButtonTitleEditing: boolean
	rightButtonLinkEditing: boolean
	rightButtonTitleEditing: boolean
	onEnableEditing: (field: EditGreetingFields) => void
	onDisableEditing: (field: EditGreetingFields) => () => void
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		minLength: number,
		maxLength: number
	) => void
}

export const GreetingButtons: React.FC<IGreetingButtons> = memo((props) => {
	const {
		editableTextRef: leftTitleRef,
		inputWidth: leftTitleInputWidth,
		changeInputWidth: changeLeftTitleInputWidth,
	} = useInput()
	const {
		editableTextRef: leftLinkRef,
		inputWidth: leftLinkInputWidth,
		changeInputWidth: changeLeftLinkInputWidth,
	} = useInput()
	const {
		editableTextRef: rightTitleRef,
		inputWidth: rightTitleInputWidth,
		changeInputWidth: changeRightTitleInputWidth,
	} = useInput()
	const {
		editableTextRef: rightLinkRef,
		inputWidth: rightLinkInputWidth,
		changeInputWidth: changeRightLinkInputWidth,
	} = useInput()

	const selectHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onInputChange(e, 0, 0)
	}

	return (
		<div className={styles.greetingButtonsBox}>
			<div className={styles.greetingButton__checked}>
				<label htmlFor='isActive'>{props.isActive ? 'Убрать' : 'Включить'} кнопки</label>
				<input
					id='isActive'
					type='checkbox'
					name='isActive'
					checked={props.isActive}
					onChange={selectHandleChange}
				/>
			</div>
			<div className={styles.greetingButtons}>
				<div>
					<div>
						<EditableText
							minLength={5}
							maxLength={10}
							fieldName='leftButtonTitle'
							EditableTextRef={leftTitleRef}
							inputWidth={leftTitleInputWidth}
							value={props.buttons.left.title}
							onInputChange={props.onInputChange}
							onEnableEditing={props.onEnableEditing}
							onDisableEditing={props.onDisableEditing}
							isEditing={props.leftButtonTitleEditing}
							changeInputWidth={changeLeftTitleInputWidth}
						/>
					</div>
					<div className={styles.greetingButton__link}>
						<EditableText
							minLength={5}
							maxLength={20}
							fieldName='leftButtonLink'
							EditableTextRef={leftLinkRef}
							inputWidth={leftLinkInputWidth}
							value={props.buttons.left.link}
							onInputChange={props.onInputChange}
							onEnableEditing={props.onEnableEditing}
							onDisableEditing={props.onDisableEditing}
							isEditing={props.leftButtonLinkEditing}
							changeInputWidth={changeLeftLinkInputWidth}
						/>
					</div>
				</div>
				<div>
					<div>
						<EditableText
							minLength={5}
							maxLength={10}
							fieldName='rightButtonTitle'
							EditableTextRef={rightTitleRef}
							value={props.buttons.right.title}
							inputWidth={rightTitleInputWidth}
							onInputChange={props.onInputChange}
							onEnableEditing={props.onEnableEditing}
							onDisableEditing={props.onDisableEditing}
							isEditing={props.rightButtonTitleEditing}
							changeInputWidth={changeRightTitleInputWidth}
						/>
					</div>
					<div className={styles.greetingButton__link}>
						<EditableText
							minLength={5}
							maxLength={20}
							fieldName='rightButtonLink'
							EditableTextRef={rightLinkRef}
							inputWidth={rightLinkInputWidth}
							value={props.buttons.right.link}
							onInputChange={props.onInputChange}
							onEnableEditing={props.onEnableEditing}
							onDisableEditing={props.onDisableEditing}
							isEditing={props.rightButtonLinkEditing}
							changeInputWidth={changeRightLinkInputWidth}
						/>
					</div>
				</div>
			</div>
		</div>
	)
})

GreetingButtons.displayName = 'GreetingButtons'
