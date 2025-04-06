import { Contact } from '@/modules/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard | Contact',
}

const ContactPage = () => (
	<>
		<Contact />
	</>
)

export default ContactPage
