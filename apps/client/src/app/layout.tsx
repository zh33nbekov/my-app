import NextIntlClientProvider from '@/providers/NextIntlProvider'
import { getLocale } from 'next-intl/server'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const locale = await getLocale()
	return <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
}
export default RootLayout
