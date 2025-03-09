'use client'

import { usePathname } from 'next/navigation'
import styles from './chat-sidebar.module.scss'

export const ChatSidebar = () => {
	const pathname = usePathname()
	const shouldRenderSidebar = pathname.startsWith('/dashboard/chat')
	if (!shouldRenderSidebar) return null

	return (
		<>
			{shouldRenderSidebar && (
				<aside className={styles.chatSidebar}>
					<div className={styles.chatSidebar__header}>
						<h3 className={styles.chatSidebar__title}>Клиенты</h3>
					</div>
					<ul>
						<li></li>
					</ul>
				</aside>
			)}
		</>
	)
}
