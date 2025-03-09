import { memo } from 'react'
import { Close } from '../../../../../public/icons'
import styles from './chat-header.module.scss'

interface IChatHeader {
	heading: string
	onCloseChat: () => void
}

export const ChatHeader: React.FC<IChatHeader> = memo(({ heading, onCloseChat }) => (
	<div className={styles.chatHeader}>
		<p>{heading}</p>
		<button onClick={onCloseChat}>
			<Close />
		</button>
	</div>
))

ChatHeader.displayName = 'ChatHeader'
