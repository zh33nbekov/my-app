'use client'

import { Backdrop } from '@/components/UI'
import { useChat } from '@/hooks/useChat'
import { Button } from '@packages/shared'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Chat as ChatIcon } from '../../../../../public/icons/common/Chat'
import styles from './chat.module.scss'

const ChatWidget = dynamic(() => import('../../index').then((module) => module.ChatWidget), {
	ssr: false,
})

export const Chat = () => {
	const [chatRoot, setChatRoot] = useState<HTMLElement | null>(null)
	const { isChatVisible, animationClass, showChat, hideChat } = useChat()

	useEffect(() => {
		setChatRoot(document.getElementById('chat'))
	}, [])

	if (!chatRoot) return null
	console.log(animationClass)
	return createPortal(
		<>
			{!isChatVisible && (
				<Button className={styles.chat__btn} onClick={showChat} id='chat' aria-label='chat'>
					<ChatIcon />
				</Button>
			)}

			{isChatVisible && (
				<>
					<Backdrop animationClass={animationClass} onClose={hideChat} />
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
				</>
			)}
		</>,
		chatRoot
	)
}
