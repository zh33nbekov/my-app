import { Details } from '@/components'
import { DecorativeElement } from '@/components/UI'
import { Link } from '@packages/shared'
import Image from 'next/image'
import { getGreeting } from '../../index'
import styles from './greeting.module.scss'

export const Greeting: React.FC = async () => {
	const greeting = await getGreeting()
	const [left, right] = greeting.subtitle ? greeting.subtitle.split(' ') : ['Rai', 'Zhnb']
	const isActiveBtns = greeting.buttons && greeting.buttons.isActive
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
					<h4 className={styles.greeting__message}>{greeting?.message}</h4>
					<h5 className={styles.greeting__title}>{greeting?.title}</h5>
					<h6 className={styles.greeting__subtitle}>
						{left} <span>{right}</span>
					</h6>
					<p className={styles.greeting__description}>{greeting?.description}</p>
					{isActiveBtns && (
						<div className={styles.greeting__buttons}>
							<Link href={greeting?.buttons.left.link}>{greeting?.buttons.left.title}</Link>
							<Link href={greeting?.buttons.right.link}>
								{greeting?.buttons.right.title}
							</Link>
						</div>
					)}
					<DecorativeElement className={`${styles.decorativeElement} ${styles.first}`} />
					<DecorativeElement className={`${styles.decorativeElement} ${styles.second}`} />
				</section>
			)}
			<Details />
		</>
	)
}
