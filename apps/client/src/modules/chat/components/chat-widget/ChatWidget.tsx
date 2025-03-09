'use client'
import { useTranslations } from 'next-intl'
import { memo, useCallback } from 'react'
import { ChatBody, ChatFooter, ChatHeader } from '../../index'
import styles from './chat-widget.module.scss'

interface IChatWidget {
	name: string
	message: string
	animationClass: string
	onCloseChat: () => void
	onSendMessage: () => void
	onSendName: (name: string) => void
	onChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	messages?: {
		from: string
		message: string
	}[]
}

export const ChatWidget: React.FC<IChatWidget> = memo(
	({ name, onSendMessage, onSendName, ...props }) => {
		const t = useTranslations('Chat')
		const heading = t('heading')
		const text = t('text')
		const subtext = t('subtext')
		const inputPlaceholder = t('inputPlaceholder')
		const textAreaPlaceholder = t('textAreaPlaceholder')

		const handleSubmit = useCallback(
			(e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault()

				if (name) {
					onSendMessage()
					return
				}

				const clientNameInput = e.currentTarget['clientName'] as HTMLInputElement
				const newClientName = clientNameInput.value
				if (newClientName.trim().length >= 3 && newClientName.trim().length <= 15) {
					onSendName(newClientName)
				}
			},
			[name, onSendMessage, onSendName]
		)

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
						onSubmit={handleSubmit}
						message={props.message}
						onSendName={onSendName}
						name={name}
						inputPlaceholder={inputPlaceholder}
						onSendMessage={onSendMessage}
						onChangeMessage={props.onChangeMessage}
						textAreaPlaceholder={textAreaPlaceholder}
					/>
				</div>
			</div>
		)
	}
)

ChatWidget.displayName = 'ChatWidget'
