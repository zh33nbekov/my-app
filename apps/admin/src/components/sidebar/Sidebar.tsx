'use client'

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

interface ISidebar {
	children: React.ReactNode | null
	animationClass?: 'opened' | 'closed'
}

export const SharedSidebar: React.FC<ISidebar> = ({ children }) => (
	<aside className={styles.sharedSidebar}>{children}</aside>
)
