'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './chat-sidebar.module.scss'

interface IClient {
	clientId: string
}

const loadClients = (): IClient[] => {
	try {
		const stored = sessionStorage.getItem('CHAT_CLIENTS')
		return stored ? JSON.parse(stored) : []
	} catch (error) {
		console.error('Ошибка загрузки клиентов:', error)
		return []
	}
}

export const ChatSidebar = () => {
	const [clients, setClients] = useState(loadClients())
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
