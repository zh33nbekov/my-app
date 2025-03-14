'use client'

import { useSocket } from '@packages/shared'
import { usePathname } from 'next/navigation'
import styles from './chat-sidebar.module.scss'

export const ChatSidebar = () => {
	const { users, selectUser } = useSocket()
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
						{users.map((user) => (
							<li onClick={() => selectUser(user.name)} key={user.name}>
								{user.name}
							</li>
						))}
					</ul>
				</aside>
			)}
		</>
	)
}
