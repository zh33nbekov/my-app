import { Link } from '@packages/shared'
import Image from 'next/image'
import { getGreeting } from '../../index'
import styles from './greeting.module.scss'

interface IGreeting {
	locale: string
}

export const Greeting: React.FC<IGreeting> = async ({ locale }) => {
	const greeting = await getGreeting(locale)
	const subtitles: string[] = []
	if (greeting.subtitle) {
		const subtitle = greeting.subtitle.split(' ')
		for (let i = 0; i < subtitle.length; i++) {
			subtitles.push(subtitle[i])
		}
	}
	const [left, right] = subtitles

	return (
		<>
			{greeting && (
				<section className={styles.greeting}>
					<div className={styles.greeting__image}>
						<Image
							src={greeting.image}
							width='360'
							height='360'
							alt='Добро пожаловать'
							priority
						/>
					</div>
					<h2 className={styles.greeting__message}>{greeting?.message}</h2>
					<h3 className={styles.greeting__title}>{greeting?.title}</h3>
					<h4 className={styles.greeting__subtitle}>
						{left} <span>{right}</span>
					</h4>
					<p className={styles.greeting__description}>{greeting?.description}</p>
					<div
						className={`${styles.greeting__buttons} ${(!greeting?.buttons.isActive || !greeting?.buttons) && styles.isDisabled}`}
					>
						<Link href={greeting?.buttons.left.link || ''}>
							{greeting?.buttons.left.title}
						</Link>
						<Link href={greeting?.buttons.right.link || ''}>
							{greeting?.buttons.right.title}
						</Link>
					</div>
				</section>
			)}
		</>
	)
}
