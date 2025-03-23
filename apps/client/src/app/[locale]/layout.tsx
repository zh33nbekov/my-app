import AppLayout from '@/layouts/AppLayout'
import NextIntlClientProvider from '@/providers/NextIntlClientProvider'
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
		<html lang={locale}>
			<head>
				<meta
					name='google-site-verification'
					content='-XSHcvYW9aSRgltL_Wdm_qJbpv2x17coxuQ-22fp5jc'
				/>
			</head>
			<body style={{ overflow: 'hidden' }}>
				<NextIntlClientProvider locale={locale}>
					<AppLayout>{children}</AppLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
export default RootLayout
