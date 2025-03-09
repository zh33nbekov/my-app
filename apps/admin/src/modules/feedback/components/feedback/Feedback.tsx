'use client'

import { FeedbackList, useGetFeedbackQuery } from '../../index'

export const Feedback = () => {
	const { data: feedback } = useGetFeedbackQuery()

	return (
		<>
			<FeedbackList feedback={feedback} />
		</>
	)
}
