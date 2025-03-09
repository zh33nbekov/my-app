'use client'
import { HEADER_LINKS } from '@/constants'
import { Link } from '@packages/shared'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { BurgerMenu } from '../../../../public/icons'
import styles from './header-mobile.module.scss'

const Drawer = dynamic(() => import('@/components').then((module) => module.Drawer), {
	ssr: false,
})

interface IHeaderMobile {
	isDrawerVisible: boolean
	onShowDrawer: () => void
	onHideDrawer: () => void
}

export const HeaderMobile: React.FC<IHeaderMobile> = ({
	isDrawerVisible,
	onShowDrawer,
	onHideDrawer,
}) => {
	// const router = useRouter()
	// const locale = useLocale()
	const tHeader = useTranslations('Header')
	// const tTranslations = useTranslations('Translations')
	// const languageChangeHandler = (e: SelectChangeEvent<string>) => {
	// 	const checkedLocale = e.target.value
	// 	console.log(e.target.value)
	// 	router.push(`/${checkedLocale}`)
	// }

	return (
		<>
			<div className={styles.headerMobile}>
				<button
					className={styles.headerMobile__burger}
					onClick={onShowDrawer}
					id='burger-menu'
					aria-label='burger-menu'
				>
					<BurgerMenu />
				</button>
			</div>
			<Drawer open={isDrawerVisible} anchor='right' onClose={onHideDrawer}>
				<ul className={styles.list}>
					{HEADER_LINKS.map(({ label, path }) => (
						<li key={label} className={styles.list__item}>
							<Link href={`#${path}`}>{tHeader(label)}</Link>
						</li>
					))}
				</ul>
			</Drawer>
		</>
	)
}
