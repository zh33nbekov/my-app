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
	const [chatRoot, setChatRoot] = useState<HTMLElement | null>(null)
	const { isChatVisible, animationClass, showChat, hideChat } = useChat()

	useEffect(() => {
		setMounted(true)
		setChatRoot(document.getElementById('chat'))

		return () => setMounted(false)
	}, [])

	if (!isMounted || !chatRoot) return null

	return createPortal(
		<div className={clsx(styles.chat, { [styles['disabled']]: !isChatVisible })}>
			{!isChatVisible && (
				<Button onClick={showChat} id='chat' aria-label='chat'>
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
					onChangeMessage={() => {}}
					animationClass={animationClass}
				/>
			)}
		</div>,
		chatRoot
	)
}
