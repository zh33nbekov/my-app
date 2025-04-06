import { Feedback } from '@/modules/feedback'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard | Feedback',
}

const FeedbackPage = () => (
	<>
		<Feedback />
	</>
)

export default FeedbackPage
