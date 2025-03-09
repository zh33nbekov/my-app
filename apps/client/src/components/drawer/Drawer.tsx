'use client'
import { Drawer as MuiDrawer } from '@mui/material'

interface IDrawer {
	open: boolean
	onClose: () => void
	children: React.ReactNode
	anchor?: 'top' | 'right' | 'bottom' | 'left'
}
export const Drawer: React.FC<IDrawer> = ({ children, open, onClose, anchor = 'right' }) => (
	<MuiDrawer open={open} anchor={anchor} onClose={onClose}>
		{children}
	</MuiDrawer>
)
