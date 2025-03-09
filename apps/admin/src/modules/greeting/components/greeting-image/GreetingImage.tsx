import { EditableImage } from '@/components'
import { memo } from 'react'

interface IGreetingImage {
	isFetchLoad: boolean
	image: string | File
	selectedImage: string
	onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const maskImage =
	'https://portfolio-bucket0303.s3.eu-north-1.amazonaws.com/1740004421440-d99781cc-0267-4199-88ea-70dc2c3ba00a-greeting.png'

export const GreetingImage: React.FC<IGreetingImage> = memo((props) => (
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

GreetingImage.displayName = 'GreetingImage'
