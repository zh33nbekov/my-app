'use client'
import { useDrawer } from '@/hooks'
import { HeaderDesktop } from './header-desktop/HeaderDesktop'
import { HeaderMobile } from './header-mobile/HeaderMobile'
import styles from './header.module.scss'

export const Header = () => {
	const { isDrawerVisible, showDrawer, hideDrawer } = useDrawer()
	return (
		<div className='wrapper'>
			<div className={styles.header}>
				<nav className={styles.nav}>
					<HeaderDesktop />
					<HeaderMobile
						isDrawerVisible={isDrawerVisible}
						onShowDrawer={showDrawer}
						onHideDrawer={hideDrawer}
					/>
				</nav>
			</div>
		</div>
	)
}
