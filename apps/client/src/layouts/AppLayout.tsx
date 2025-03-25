import { Header, NetworkCanvas, SocialLinks } from '@/components'
import { Loading } from '@/components/UI'
import { ToastifyProvider } from '@packages/shared'

interface IAppLayout {
	children: React.ReactNode
}

const AppLayout = ({ children }: IAppLayout) => (
	<>
		<Loading />
		<Header />
		<main className='wrapper'>{children}</main>
		<ToastifyProvider />
		<SocialLinks />
		<NetworkCanvas />
		<div id='chat' />
		<div id='backdrop' />
		<div id='header-drawer' />
		<div id='social-links' />
	</>
)

export default AppLayout
