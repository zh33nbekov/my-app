import { AboutMe } from '@/modules/about-me'
import { Certifications } from '@/modules/certifications'
import { ContactMe } from '@/modules/contact-me'
import { Experience } from '@/modules/experience'
import { Greeting } from '@/modules/greeting'
import { Projects } from '@/modules/projects'
import { Skills } from '@/modules/skills'

const Home = () => (
	<>
		<Greeting />
		<AboutMe />
		<Projects />
		<Skills />
		<Certifications />
		<Experience />
		<ContactMe />
		{/* <Chat /> */}
	</>
)

export default Home
