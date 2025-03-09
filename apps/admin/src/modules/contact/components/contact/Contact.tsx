'use client'

import isEqual from 'lodash.isequal'
import { useCallback, useEffect, useState } from 'react'
import { useGetContactQuery, useUpdateContactMutation } from '../../api/contact.api'
import { ContactForm, IContact } from '../../index'

export const Contact = () => {
	const [selectedImage, setSelectedImage] = useState('')
	const [editedContact, setEditedContact] = useState<IContact>({
		image: '',
		id: '',
	})

	const { data: contact, isLoading: isFetchLoad, refetch } = useGetContactQuery()
	const [handleUpdate, { isLoading: isUpdateLoad }] = useUpdateContactMutation()
	const isChanged = contact ? !isEqual(contact, editedContact) : false

	const imageHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				setSelectedImage(reader.result as string)
				setEditedContact((prev) => ({ ...prev, image: file }))
			}
			reader.readAsDataURL(file)
		}
	}, [])

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			const formData = new FormData()
			formData.append('id', editedContact.id)
			formData.append('image', editedContact.image)
			try {
				const response = await handleUpdate(formData)
				console.log(response)
				refetch()
			} catch (error) {
				console.log(error)
			}
		},
		[editedContact]
	)

	useEffect(() => {
		setEditedContact((prev) => ({
			...prev,
			...contact,
		}))
	}, [contact])

	return (
		<ContactForm
			isChanged={isChanged}
			onSubmit={handleSubmit}
			selectedImage={selectedImage}
			editedContact={editedContact}
			onChangeImage={imageHandleChange}
			isLoading={isFetchLoad || isUpdateLoad}
		/>
	)
}
