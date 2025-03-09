'use client'

import { useLocalStorage } from '@packages/shared'
import isEqual from 'lodash.isequal'
import { useCallback, useEffect, useState } from 'react'
import { useGetAboutQuery, useUpdateAboutMutation } from '../../api/about.api'
import { AboutForm, EditAboutFields, IAbout } from '../../index'

export const About = () => {
	const [selectedImage, setSelectedImage] = useState<string>('')
	const [isEdit, setEdit] = useState<{ [key: string]: boolean }>({})
	const [selectedLanguage, setSelectedLanguage] = useLocalStorage('locale', 'ru')
	const [handleUpdate] = useUpdateAboutMutation()
	const { data: about, isLoading: isFetchLoad, refetch } = useGetAboutQuery(selectedLanguage)
	const [editedAbout, setEditedAbout] = useState<IAbout>({
		image: '',
		description: '',
		id: '',
	})
	const isChanged = about ? !isEqual(about, editedAbout) : false

	const imageHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				setSelectedImage(reader.result as string)
				setEditedAbout((prev) => ({ ...prev, image: file }))
			}
			reader.readAsDataURL(file)
		}
	}

	const languageHandleChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const { value } = e.target
			setSelectedLanguage(value)
		},
		[setSelectedLanguage]
	)

	const enableEditing = useCallback((field: EditAboutFields) => {
		console.log(field)
		setEdit((prev) => ({ ...prev, [field]: true }))
	}, [])

	const disableEditing = useCallback(
		(field: EditAboutFields) => () => {
			setEdit((prev) => ({ ...prev, [field]: false }))
		},
		[]
	)

	const handleTextareaFocus = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
		const textarea = event.target
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}, [])

	const inputHandleChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>, minLength: number, maxLength: number) => {
			const { name, value } = e.target

			if (value.length < minLength || value.length > maxLength) {
				return
			}

			setEditedAbout((prev) => ({ ...prev, [name]: value }))
		},
		[]
	)

	const submitHandler = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			const formData = new FormData()
			formData.append('id', editedAbout.id)
			formData.append('image', editedAbout.image)
			formData.append('language', selectedLanguage)
			formData.append('description', editedAbout.description)
			try {
				const response = await handleUpdate(formData)
				console.log(response)
				refetch()
			} catch {
				//
			}
		},
		[
			editedAbout.image,
			editedAbout.description,
			editedAbout.id,
			selectedLanguage,
			refetch,
			handleUpdate,
		]
	)

	useEffect(() => {
		setEditedAbout((prev) => ({
			...prev,
			...about,
		}))
	}, [about])

	return (
		<>
			<AboutForm
				isEdit={isEdit}
				isChanged={isChanged}
				isLoading={isFetchLoad}
				onSubmit={submitHandler}
				image={editedAbout.image}
				selectedImage={selectedImage}
				onEnableEditing={enableEditing}
				onInputChange={inputHandleChange}
				onDisableEditing={disableEditing}
				onChangeImage={imageHandleChange}
				selectedLanguage={selectedLanguage}
				description={editedAbout.description}
				onChangeLanguage={languageHandleChange}
				handleTextareaFocus={handleTextareaFocus}
			/>
		</>
	)
}
