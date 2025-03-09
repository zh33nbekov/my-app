'use client'

import { useChat } from '@/hooks/useChat'
import { Button } from '@packages/shared'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Chat as ChatIcon } from '../../../../../public/icons/common/Chat'
import styles from './chat.module.scss'

const ChatWidget = dynamic(() => import('../../index').then((module) => module.ChatWidget))

export const Chat = () => {
	const [isMounted, setMounted] = useState(false)
	const [chatRoot, setChatRoot] = useState<HTMLElement | null>(null)
	const { isChatVisible, animationClass, showChat, hideChat } = useChat()

	useEffect(() => {
		setMounted(true)
		setChatRoot(document.getElementById('chat'))

		return () => setMounted(false)
	}, [])

	// Don't render anything during SSR or if not mounted
	if (!isMounted) return null

	// Render button outside of portal if chat root isn't available yet
	if (!chatRoot) {
		return (
			<div className={`${styles.chat} ${!isChatVisible && styles['disabled']}`}>
				<Button className={styles.chat__button} onClick={showChat} id='chat' aria-label='chat'>
					<ChatIcon />
				</Button>
			</div>
		)
	}

	// Render with portal once everything is ready
	return createPortal(
		<div className={`${styles.chat} ${!isChatVisible && styles['disabled']}`}>
			{!isChatVisible && (
				<Button className={styles.chat__button} onClick={showChat} id='chat' aria-label='chat'>
					<ChatIcon />
				</Button>
			)}

			{isChatVisible && (
				<ChatWidget
					name='Rai'
					messages={[]}
					message={'message'}
					onSendName={() => {}}
					onCloseChat={hideChat}
					onSendMessage={() => {}}
					onChangeMessage={() => {}}
					animationClass={animationClass}
				/>
			)}
		</div>,
		chatRoot
	)
}
