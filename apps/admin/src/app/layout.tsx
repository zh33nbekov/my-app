import ReduxProvider from '@/providers/ReduxProvider'
import { ToastifyProvider } from '@packages/shared'
import type { Metadata } from 'next'
import './page.css'

export const metadata: Metadata = {
	title: 'Rai Zheenbekov | Dashboard',
	description: `Я frontend-разработчик с уверенными знаниями и практическим
		опытом работы с современными веб-технологиями. Умею
		разрабатывать удобные, интуитивно понятные интерфейсы, а также
		работать с серверной частью (Node.js). Следую лучшим
		практикам и принципам чистого кода (SOLID, DRY, KISS), уделяю
		внимание производительности и удобству поддержки проекта.`,
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => (
	<html lang='en'>
		<body>
			<ReduxProvider>
				<ToastifyProvider />
				{children}
			</ReduxProvider>
		</body>
	</html>
)

export default RootLayout
