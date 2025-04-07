import AppLayout from '@/layouts/AppLayout'
import NextIntlClientProvider from '@/providers/NextIntlProvider'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import './page.css'

export const metadata: Metadata = {
	title: 'Rai Zheenbekov | Frontend разработчик',
	description: `Я frontend-разработчик с уверенными знаниями и практическим
		опытом работы с современными веб-технологиями. Умею
		разрабатывать удобные, интуитивно понятные интерфейсы, а также
		работать с серверной частью (Node.js). Следую лучшим
		практикам и принципам чистого кода (SOLID, DRY, KISS), уделяю
		внимание производительности и удобству поддержки проекта.`,
	openGraph: {
		type: 'website',
		siteName: 'Rai Zheenbekov',
		title: 'Rai Zheenbekov | Frontend разработчик',
		description: `Я frontend-разработчик с уверенными знаниями и практическим
		опытом работы с современными веб-технологиями.`,
		countryName: 'Kyrgyzstan',
		phoneNumbers: ['0703001555', '0220034603'],
		emails: ['rai.zheenbekov@gmail.com'],
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: 'https://rai-zheenbekov.vercel.app',
		languages: {
			ru: 'RU',
			en: 'EN',
		},
	},
	applicationName: 'Портфолио',
}

const supportedLocales = ['ru', 'en']

const RootLayout = async ({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) => {
	const { locale } = await params
	if (!supportedLocales.includes(locale)) {
		notFound()
	}

	return (
		<NextIntlClientProvider locale={locale}>
			<AppLayout>{children}</AppLayout>
		</NextIntlClientProvider>
	)
}
export default RootLayout
