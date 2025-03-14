'use client'

import { useChat } from '@/hooks/useChat'
import { Button, useSocket } from '@packages/shared'
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Chat as ChatIcon } from '../../../../../public/icons/common/Chat'
import styles from './chat.module.scss'

const ChatWidget = dynamic(() => import('../../index').then((module) => module.ChatWidget), {
	ssr: false,
})

export const Chat = () => {
	const [isMounted, setMounted] = useState(false)
	const [message, setMessage] = useState('')
	const [chatRoot, setChatRoot] = useState<HTMLElement | null>(null)
	const { isChatVisible, animationClass, showChat, hideChat } = useChat()
	const { messages, users, sendMessage, sendUsername, username } = useSocket()

	useEffect(() => {
		setMounted(true)
		setChatRoot(document.getElementById('chat'))

		return () => {
			setMounted(false)
		}
	}, [])

	const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value)
	}

	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()

			if (username) {
				sendMessage(message)
				return
			}

			const clientNameInput = e.currentTarget['clientName'] as HTMLInputElement
			const newClientName = clientNameInput.value
			if (newClientName.trim().length >= 3 && newClientName.trim().length <= 15) {
				sendUsername(newClientName)
			}
		},
		[username, sendMessage, sendUsername, message]
	)

	if (!isMounted) return null

	if (!chatRoot) return null

	return createPortal(
		<div className={`${styles.chat} ${!isChatVisible && styles['disabled']}`}>
			{!isChatVisible && (
				<Button className={styles.chat__button} onClick={showChat} id='chat' aria-label='chat'>
					<ChatIcon />
				</Button>
			)}

			{isChatVisible && (
				<ChatWidget
					messages={messages}
					username={username}
					message={message}
					onCloseChat={hideChat}
					onSubmit={handleSubmit}
					onSendMessage={sendMessage}
					onSendName={sendUsername}
					onChangeMessage={handleMessageChange}
					animationClass={animationClass}
				/>
			)}
		</div>,
		chatRoot
	)
}
