import { AboutMe } from '@/modules/about-me'
import { Certifications } from '@/modules/certifications'
import { Chat } from '@/modules/chat'
import { ContactMe } from '@/modules/contact-me'
import { Greeting } from '@/modules/greeting'
import { Projects } from '@/modules/projects'
import { Qualification } from '@/modules/qualification'
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
			<Qualification />
			<ContactMe />
			<Chat />
		</>
	)
}

export default Home
