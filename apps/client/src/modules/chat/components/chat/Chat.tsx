'use client'

import { useChat } from '@/hooks/useChat'
import { Button } from '@packages/shared'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Chat as ChatIcon } from '../../../../../public/icons/common/Chat'
import styles from './chat.module.scss'

const Backdrop = dynamic(() => import('@packages/shared').then((module) => module.Backdrop), {
	ssr: false,
})
const ChatWidget = dynamic(() => import('../../index').then((module) => module.ChatWidget), {
	ssr: false,
})

export const Chat = () => {
	const [message, setMessage] = useState('')
	const [chatRoot, setChatRoot] = useState<HTMLElement | null>(null)
	const { isChatVisible, animationClass, showChat, hideChat } = useChat()
	const t = useTranslations('Info')

	const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value)
	}
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const { showInfoToast } = await import('@packages/shared')
		showInfoToast(t('Chat'))
	}

	useEffect(() => {
		setChatRoot(document.getElementById('chat'))
	}, [])

	if (!chatRoot) return null

	return createPortal(
		<>
			{!isChatVisible && (
				<Button aria-label='chat' onClick={showChat} id={styles.chatBtn}>
					<ChatIcon />
				</Button>
			)}

			{isChatVisible && (
				<>
					<Backdrop animationClass={animationClass} onClose={hideChat} />
					<ChatWidget
						messages={[]}
						username={'Username'}
						message={message}
						onCloseChat={hideChat}
						onSubmit={handleSubmit}
						onSendMessage={() => {}}
						onSendName={() => {}}
						onChangeMessage={handleChangeMessage}
						animationClass={animationClass}
					/>
				</>
			)}
		</>,
		chatRoot
	)
}
