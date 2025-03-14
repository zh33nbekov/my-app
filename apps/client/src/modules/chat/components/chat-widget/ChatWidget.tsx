'use client'

import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { ChatBody, ChatFooter, ChatHeader } from '../../index'
import styles from './chat-widget.module.scss'

interface IChatWidget {
	message: string
	animationClass: string
	username: string
	onCloseChat: () => void
	onSendName: (name: string) => void
	onSendMessage: (message: string) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	onChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	messages: {
		sender: string
		message: string
	}[]
}

export const ChatWidget: React.FC<IChatWidget> = memo((props) => {
	const t = useTranslations('Chat')
	const heading = t('heading')
	const text = t('text')
	const subtext = t('subtext')
	const inputPlaceholder = t('inputPlaceholder')
	const textAreaPlaceholder = t('textAreaPlaceholder')

	return (
		<div
			onClick={props.onCloseChat}
			className={`${styles.viewport} ${styles[props.animationClass]}`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`${styles.chat} ${styles[props.animationClass]}`}
			>
				<ChatHeader heading={heading} onCloseChat={props.onCloseChat} />
				<ChatBody text={text} subtext={subtext} messages={props.messages} />
				<ChatFooter
					onSubmit={props.onSubmit}
					username={props.username}
					message={props.message}
					inputPlaceholder={inputPlaceholder}
					onChangeMessage={props.onChangeMessage}
					textAreaPlaceholder={textAreaPlaceholder}
				/>
			</div>
		</div>
	)
})

ChatWidget.displayName = 'ChatWidget'
