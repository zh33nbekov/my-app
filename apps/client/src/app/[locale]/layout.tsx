import AppLayout from '@/layouts/AppLayout'
import NextIntlClientProvider from '@/providers/NextIntlProvider'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import './page.css'

export const metadata: Metadata = {
	title: 'Rai Zheenbekov',
	description:
		'Frontend developer with a strong focus on creating scalable, user-friendly, and innovative web applications using modern technologies and best practices.',
}

const supportedLocales = ['en', 'ru']

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
