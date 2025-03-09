import { NextIntlClientProvider as IntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

interface INextIntlClientProvider {
	locale: string
	children: ReactNode
}

const NextIntlClientProvider = async ({ children, locale }: INextIntlClientProvider) => {
	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch (error) {
		// throw new Error('Messages for locale not found')
		console.log(error)
	}
	return (
		<IntlClientProvider locale={locale} messages={messages}>
			{children}
		</IntlClientProvider>
	)
}

export default NextIntlClientProvider
