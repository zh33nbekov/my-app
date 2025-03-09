import { EditableImage } from '@/components'
import styles from './about-image.module.scss'

interface IAboutImage {
	image: string | File
	selectedImage: string
	onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const maskImage =
	'https://portfolio-bucket0303.s3.eu-north-1.amazonaws.com/1740003981850-1c27d8a3-11de-4e30-b40e-d83e857dc4e8-about.png'

export const AboutImage: React.FC<IAboutImage> = ({ image, selectedImage, onChangeImage }) => (
	<div className={styles.aboutImageBox}>
		{image && (
			<EditableImage
				priority
				isLoading
				src={image}
				width={380}
				height={380}
				alt='Обо мне'
				boxWidth='400'
				boxHeight='400'
				maskImage={maskImage}
				selectedImage={selectedImage}
				onChangeImage={onChangeImage}
			/>
		)}
	</div>
)
