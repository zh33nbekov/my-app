import { EditableImage } from '@/components'
import { memo } from 'react'

interface IContactImage {
	isFetchLoad: boolean
	image: string | File
	selectedImage: string
	onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const maskImage =
	'https://portfolio-bucket0303.s3.eu-north-1.amazonaws.com/1740004421440-d99781cc-0267-4199-88ea-70dc2c3ba00a-contact.png'

export const ContactImage: React.FC<IContactImage> = memo((props) => (
	<>
		{props.image && (
			<EditableImage
				priority
				width={360}
				height={360}
				boxWidth='400'
				boxHeight='400'
				alt='Приветствие'
				maskImage={maskImage}
				isLoading={props.isFetchLoad}
				selectedImage={props.selectedImage}
				onChangeImage={props.onChangeImage}
				src={typeof props.image === 'string' ? props.image : undefined}
			/>
		)}
	</>
))

ContactImage.displayName = 'ContactImage'
