import { Chat } from '@/modules/chat'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard | Chat',
}

const ChatPage = () => (
	<>
		<Chat />
	</>
)

export default ChatPage
