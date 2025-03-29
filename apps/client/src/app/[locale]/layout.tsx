import AppLayout from '@/layouts/AppLayout'
import NextIntlClientProvider from '@/providers/NextIntlProvider'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LayoutProps } from '../../../.next/types/app/[locale]/layout'
import './page.css'

export const metadata: Metadata = {
	title: 'Rai Zheenbekov',
	description:
		'Frontend developer with a strong focus on creating scalable, user-friendly, and innovative web applications using modern technologies and best practices.',
}

const supportedLocales = ['en', 'ru']

const RootLayout = async ({ children, params }: LayoutProps) => {
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
