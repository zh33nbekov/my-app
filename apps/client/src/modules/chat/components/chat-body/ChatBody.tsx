import { memo } from 'react'
import styles from './chat-body.module.scss'

interface IChatBody {
	text: string
	subtext: string
	messages: {
		sender: string
		message: string
	}[]
}

export const ChatBody: React.FC<IChatBody> = memo(({ text, subtext, messages = [] }) => (
	<div className={styles.chatBody}>
		{messages.length > 0 &&
			messages.map((msg) => {
				console.log(msg)
				return (
					<div key={msg.message}>
						{/* <span className={styles.chatBody__time}>{msg.timestamp}</span> */}
						<p
							className={
								msg.sender === 'Admin' ? styles.chatBody__admin : styles.chatBody__client
							}
						>
							{/* {msg.clientId ? `Клиент ${msg.clientId}: ${msg.text}` : msg.text} */}
							<strong>{msg.sender}: </strong> {msg.message}
						</p>
					</div>
				)
			})}
		{!messages.length && (
			<div className={styles.chatEmpty}>
				<div className={styles.chatEmpty__icon}>💬</div>
				<p className={styles.chatEmpty__text}>{text}</p>
				<p className={styles.chatEmpty__subtext}>{subtext}</p>
				<div className={styles.chatEmpty__dots}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		)}
	</div>
))

ChatBody.displayName = 'ChatBody'
