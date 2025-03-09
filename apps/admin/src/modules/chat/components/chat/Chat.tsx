'use client'

import { AdminChat } from '@/modules/ws'
import { useWebSocket } from '@packages/shared'

export const Chat = () => {
	const { clients } = useWebSocket(true)

	return (
		<div style={{ display: 'flex' }}>
			<div></div>
			<AdminChat />
		</div>
	)
}
