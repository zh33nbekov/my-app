import { About } from '@/modules/about'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard | About',
}

const AboutPage = () => (
	<>
		<About />
	</>
)

export default AboutPage
