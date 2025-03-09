import { AboutMe } from '@/modules/about-me'
import { Certifications } from '@/modules/certifications'
import { Chat } from '@/modules/chat'
import { ContactMe } from '@/modules/contact-me'
import { Experience } from '@/modules/experience'
import { Greeting } from '@/modules/greeting'
import { Projects } from '@/modules/projects'
import { Skills } from '@/modules/skills'

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
	const { locale } = await params

	return (
		<>
			<Greeting locale={locale} />
			<AboutMe locale={locale} />
			<Projects />
			<Skills />
			<Certifications />
			<Experience />
			<ContactMe />
			<Chat />
		</>
	)
}

export default Home
