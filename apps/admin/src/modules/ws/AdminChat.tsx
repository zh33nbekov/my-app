'use client'

import { useWebSocket } from '@packages/shared'
import { useEffect, useRef, useState } from 'react'
import styles from './admin-chat.module.scss'

export const AdminChat: React.FC = () => {
	const [message, setMessage] = useState('')
	const messagesContainerRef = useRef<HTMLDivElement | null>(null)

	const {
		isConnected,
		isRegistered,
		register,
		sendMessage,
		selectedClient,
		getMessagesForSelectedClient,
		error,
	} = useWebSocket({
		isAdmin: true,
		userName: 'Rai',
	})

	useEffect(() => {
		if (isConnected && !isRegistered) {
			register()
		}
	}, [isConnected, isRegistered, register])

	const messages = getMessagesForSelectedClient()

	useEffect(() => {
		// Прокрутка чата вниз при получении новых сообщений
		if (messagesContainerRef.current) {
			messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
		}
	}, [messages])

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault()
		if (message.trim() && selectedClient) {
			sendMessage(message)
			setMessage('')
		}
	}

	return (
		<div className={styles.adminChatContainer}>
			<h2 className={styles.chatTitle}>
				{selectedClient ? 'Чат с клиентом' : 'Выберите клиента из списка'}
			</h2>

			<div className={styles.messagesContainer} ref={messagesContainerRef}>
				{!selectedClient ? (
					<div className={styles.noClient}>
						Пожалуйста, выберите клиента из списка слева для начала беседы
					</div>
				) : messages.length === 0 ? (
					<div className={styles.emptyChat}>
						Нет сообщений с этим клиентом. Начните беседу.
					</div>
				) : (
					messages.map((msg) => (
						<div
							key={msg.id}
							className={`${styles.message} ${
								msg.from === 'admin' ? styles.adminMessage : styles.clientMessage
							}`}
						>
							{msg.from !== 'admin' && (
								<div className={styles.messageSender}>{msg.fromName}</div>
							)}
							<div className={styles.messageContent}>{msg.text}</div>
							<div className={styles.messageTime}>
								{new Date(msg.timestamp).toLocaleTimeString([], {
									hour: '2-digit',
									minute: '2-digit',
								})}
							</div>
						</div>
					))
				)}
				{error && <div className={styles.error}>{error}</div>}
			</div>

			<form onSubmit={handleSendMessage} className={styles.messageForm}>
				<input
					type='text'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder={
						selectedClient
							? 'Введите сообщение...'
							: 'Выберите клиента для отправки сообщения'
					}
					className={styles.messageInput}
					disabled={!selectedClient || !isRegistered}
				/>
				<button
					type='submit'
					className={styles.sendButton}
					disabled={!selectedClient || !isRegistered}
				>
					Отправить
				</button>
			</form>
		</div>
	)
}
