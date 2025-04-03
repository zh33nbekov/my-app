'use client'

import { Send } from '@packages/shared'
import { memo } from 'react'
import styles from './chat-footer.module.scss'

interface IChatFooter {
	message: string
	username: string
	inputPlaceholder: string
	textAreaPlaceholder: string
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	onChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const ChatFooter: React.FC<IChatFooter> = memo((props) => (
	<form name='chat' className={styles.chatFooter} onSubmit={props.onSubmit}>
		{props.username ? (
			<textarea
				name='message'
				value={props.message}
				onChange={props.onChangeMessage}
				placeholder={props.textAreaPlaceholder}
			/>
		) : (
			<input type='text' name='clientName' placeholder={props.inputPlaceholder} />
		)}
		<button type='submit'>
			<Send />
		</button>
	</form>
))

ChatFooter.displayName = 'ChatFooter'
