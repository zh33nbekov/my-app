'use client'

import styles from './sidebar.module.scss'

interface ISidebar {
	children: React.ReactNode | null
	animationClass?: 'opened' | 'closed'
}

export const Sidebar: React.FC<ISidebar> = ({ children }) => (
	<aside className={styles.sidebar}>{children}</aside>
)
