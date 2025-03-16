import { Header } from '@/components'
import { Loading } from '@/components/UI/index'
import { ToastifyProvider } from '@packages/shared'

const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<>
		<Loading />
		<ToastifyProvider />
		<Header />
		<main className='wrapper'>{children}</main>
		<div id='chat' />
		<div id='backdrop' />
		<div id='header-drawer' />
	</>
)

export default AppLayout
