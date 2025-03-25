'use client'

import { useChat } from '@/hooks/useChat'
import { Button } from '@packages/shared'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Chat as ChatIcon } from '../../../../../public/icons/common/Chat'
import styles from './chat.module.scss'

const ChatWidget = dynamic(() => import('../../index').then((module) => module.ChatWidget), {
	ssr: false,
})

export const Chat = () => {
	const [isMounted, setMounted] = useState(false)
	// const [message, setMessage] = useState('')
	const [chatRoot, setChatRoot] = useState<HTMLElement | null>(null)
	const { isChatVisible, animationClass, showChat, hideChat } = useChat()

	useEffect(() => {
		setMounted(true)
		setChatRoot(document.getElementById('chat'))

		return () => setMounted(false)
	}, [])

	const handleMessageChange = () => {
		// setMessage(e.target.value)
	}

	// const handleSubmit = useCallback(
	// 	(e: React.FormEvent<HTMLFormElement>) => {
	// 		e.preventDefault()

	// 		if (username) {
	// 			sendMessage(message)
	// 			return
	// 		}

	// 		const clientNameInput = e.currentTarget['clientName'] as HTMLInputElement
	// 		const newClientName = clientNameInput.value
	// 		if (newClientName.trim().length >= 3 && newClientName.trim().length <= 15) {
	// 			sendUsername(newClientName)
	// 		}
	// 	},
	// 	[username, sendMessage, sendUsername, message]
	// )

	if (!isMounted || !chatRoot) return null

	return createPortal(
		<div className={clsx(styles.chat, { [styles['disabled']]: !isChatVisible })}>
			{!isChatVisible && (
				<Button className={styles.chat__button} onClick={showChat} id='chat' aria-label='chat'>
					<ChatIcon />
				</Button>
			)}

			{isChatVisible && (
				<ChatWidget
					messages={[]}
					username={'Username'}
					message={'Message'}
					onCloseChat={hideChat}
					onSubmit={() => {}}
					onSendMessage={() => {}}
					onSendName={() => {}}
					onChangeMessage={handleMessageChange}
					animationClass={animationClass}
				/>
			)}
		</div>,
		chatRoot
	)
}
