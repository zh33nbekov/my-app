'use client'

import { useLocalStorage } from '@packages/shared'
import isEqual from 'lodash.isequal'
import { useCallback, useEffect, useState } from 'react'
import {
	EditGreetingFields,
	GreetingForm,
	IGreeting,
	useGetGreetingQuery,
	useUpdateGreetingMutation,
} from '../../index'

const buttonFieldsMap: Record<string, { side: 'left' | 'right'; key: 'title' | 'link' }> = {
	leftButtonLink: { side: 'left', key: 'link' },
	leftButtonTitle: { side: 'left', key: 'title' },
	rightButtonLink: { side: 'right', key: 'link' },
	rightButtonTitle: { side: 'right', key: 'title' },
}

export const Greeting = () => {
	const [selectedImage, setSelectedImage] = useState('')
	const [isEdit, setEdit] = useState<{ [key: string]: boolean }>({})
	const [selectedLanguage, setSelectedLanguage] = useLocalStorage('locale', 'ru')
	const [handleUpdate, { isLoading: isUpdateLoad }] = useUpdateGreetingMutation()
	const {
		data: greeting,
		refetch,
		isLoading: isFetching,
		isSuccess,
	} = useGetGreetingQuery(selectedLanguage)
	const [editedGreeting, setEditedGreeting] = useState<IGreeting>({
		title: '',
		image: '',
		message: '',
		subtitle: '',
		description: '',
		buttons: {
			isActive: false,
			left: { link: '', title: '' },
			right: { link: '', title: '' },
		},
		id: '',
	})
	const buttonsHandleChange = useCallback((name: string, value: string, checked: boolean) => {
		const buttonField = buttonFieldsMap[name]
		setEditedGreeting((prev) => ({
			...prev,
			buttons: {
				...prev.buttons,
				isActive: name === 'isActive' ? checked : prev.buttons.isActive,
				...(buttonField && {
					[buttonField.side]: {
						...prev.buttons[buttonField.side],
						[buttonField.key]: value,
					},
				}),
			},
		}))
	}, [])

	const inputHandleChange = useCallback(
		(
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
			minLength: number,
			maxLength: number
		) => {
			const { name, value } = e.target
			const isCheckbox = e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
			const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false

			if (value !== 'on') {
				if (value.length < minLength || value.length > maxLength) {
					return
				}
			}

			if (name in buttonFieldsMap || isCheckbox) {
				buttonsHandleChange(name, value, checked)
				return
			}

			setEditedGreeting((prev) => ({
				...prev,
				[name]: value,
			}))
		},
		[buttonsHandleChange]
	)

	const languageHandleChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const { value } = e.target
			setSelectedLanguage(value)
		},
		[setSelectedLanguage]
	)

	const enableEditing = useCallback((field: EditGreetingFields) => {
		setEdit((prev) => ({ ...prev, [field]: true }))
	}, [])

	const disableEditing = useCallback(
		(field: EditGreetingFields) => () => {
			setEdit((prev) => ({ ...prev, [field]: false }))
		},
		[]
	)

	const imageHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				setSelectedImage(reader.result as string)
				setEditedGreeting((prev) => ({ ...prev, image: file }))
			}
			reader.readAsDataURL(file)
		}
	}, [])

	const handleTextareaFocus = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
		const textarea = event.target
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}, [])

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			const formData = new FormData()
			const { image, id, message, title, subtitle, description, buttons } = editedGreeting
			formData.append('language', selectedLanguage)
			formData.append('id', id)

			if (image instanceof File) {
				formData.append('image', image)
			}

			formData.append('message', JSON.stringify(message))
			formData.append('title', JSON.stringify(title))
			formData.append('subtitle', JSON.stringify(subtitle))
			formData.append('description', JSON.stringify(description))
			formData.append('buttons', JSON.stringify(buttons))
			try {
				await handleUpdate(formData).unwrap()
				refetch()
			} catch (error) {
				console.log(error)
			}
		},
		[editedGreeting, refetch, handleUpdate, selectedLanguage]
	)
	const isChanged = greeting ? !isEqual(greeting, editedGreeting) : false

	useEffect(() => {
		if (greeting) {
			setEditedGreeting((prev) => ({
				...prev,
				...greeting,
				buttons: {
					...prev.buttons,
					...greeting.buttons,
					isActive: greeting.buttons.isActive,
					left: { ...prev.buttons.left, ...greeting.buttons.left },
					right: { ...prev.buttons.right, ...greeting.buttons.right },
				},
			}))
		}
	}, [greeting])

	return (
		<GreetingForm
			isEdit={isEdit}
			isSuccess={isSuccess}
			isChanged={isChanged}
			onSubmit={handleSubmit}
			selectedImage={selectedImage}
			onEnableEditing={enableEditing}
			editedGreeting={editedGreeting}
			onChangeImage={imageHandleChange}
			onInputChange={inputHandleChange}
			onDisableEditing={disableEditing}
			selectedLanguage={selectedLanguage}
			onTextAreaFocus={handleTextareaFocus}
			isLoading={isFetching || isUpdateLoad}
			onChangeLanguage={languageHandleChange}
			isActive={editedGreeting.buttons.isActive}
		/>
	)
}
