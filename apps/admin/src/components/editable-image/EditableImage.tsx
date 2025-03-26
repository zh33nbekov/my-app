import Image from 'next/image'
import { memo } from 'react'
import { FileUpload } from '../index'
import styles from './editable-image.module.scss'

interface IEditableImage {
	alt: string
	width: number
	height: number
	boxWidth: string
	priority: boolean
	boxHeight: string
	maskImage: string
	isLoading: boolean
	selectedImage: string
	src: string | File | undefined
	onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const EditableImage: React.FC<IEditableImage> = memo((props) => (
	<div
		className={styles.image}
		style={{ width: `${props.boxWidth}px`, height: `${props.boxHeight}px` }}
	>
		<FileUpload accept='image/*' name='image' onChangeFile={props.onChangeImage}>
			<Image
				alt={props.alt}
				width={props.width}
				height={props.height}
				priority={props.priority}
				className={styles.image__img}
				src={typeof props.src === 'string' ? props.src : props.selectedImage}
			/>
		</FileUpload>
	</div>
))

EditableImage.displayName = 'EditableImage'
