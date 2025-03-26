'use client'

import { useRef } from 'react'
import styles from './file-upload.module.scss'

interface IFileUpload {
	name: string
	accept: string
	children: React.ReactNode
	onChangeFile?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileUpload: React.FC<IFileUpload> = ({ children, name, accept, onChangeFile }) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const showFileUpload = () => {
		inputRef.current?.click()
	}

	return (
		<div className={styles.fileUpload} onClick={showFileUpload}>
			<input type='file' ref={inputRef} onChange={onChangeFile} accept={accept} name={name} />
			{children}
		</div>
	)
}
