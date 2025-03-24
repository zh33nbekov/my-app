import { Header, NetworkCanvas } from '@/components'
import { Loading } from '@/components/UI/index'
import { ToastifyProvider } from '@packages/shared'

interface IAppLayout {
	children: React.ReactNode
}

const AppLayout = ({ children }: IAppLayout) => (
	<>
		<Loading />
		<ToastifyProvider />
		<Header />
		<main className='wrapper'>{children}</main>
		<div id='chat' />
		<div id='backdrop' />
		<div id='header-drawer' />
		<NetworkCanvas />
	</>
)

export default AppLayout
