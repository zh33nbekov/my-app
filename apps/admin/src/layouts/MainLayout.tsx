import { Header } from '@/components'
import SidebarBridge from '@/components/sidebar/SidebarBridge'

const MAIN_LAYOUT_STYLES = {
	width: '100%',
	height: '100%',
	display: 'flex',
}
const MAIN_LAYOUT_INNER_STYLES: React.CSSProperties = {
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
}

const MainLayout = ({ children }: { children: React.ReactNode }) => (
	<>
		<div style={MAIN_LAYOUT_STYLES}>
			<SidebarBridge />
			<div style={MAIN_LAYOUT_INNER_STYLES}>
				<Header />
				<main className='wrapper'>{children}</main>
			</div>
			<div id='backdrop' />
		</div>
	</>
)

export default MainLayout
