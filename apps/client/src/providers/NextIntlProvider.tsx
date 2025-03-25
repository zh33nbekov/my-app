import { NextIntlClientProvider as IntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

interface INextIntlProvider {
	locale: string
	children: ReactNode
}

const NextIntlProvider = async ({ children, locale }: INextIntlProvider) => {
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

export default NextIntlProvider
