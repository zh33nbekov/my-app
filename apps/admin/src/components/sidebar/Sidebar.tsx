'use client'

import { Sidebar as SharedSidebar } from '@packages/shared'
import { Navigation } from '../navigation/Navigation'
import styles from './sidebar.module.scss'

export const Sidebar = ({ children }: { children: React.ReactNode }) => (
	<>
		<SharedSidebar>
			<div className={styles.sidebar}>
				<div className={styles.sidebar__header}>
					<h3 className={styles.sidebar__title}>Rai</h3>
				</div>
				<Navigation />
				{children}
			</div>
		</SharedSidebar>
	</>
)
