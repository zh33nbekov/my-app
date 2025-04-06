import { Greeting } from '@/modules/greeting'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard | Greeting',
}

const GreetingPage = () => (
	<>
		<Greeting />
	</>
)

export default GreetingPage
