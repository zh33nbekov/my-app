'use client'

import {
	FeedbackList,
	useClearFeedbackMutation,
	useGetFeedbackQuery,
	useRemoveFeedbackMutation,
} from '../../index'

export const Feedback = () => {
	const { data: feedback, refetch, isLoading: isFetching } = useGetFeedbackQuery()
	const [clearFeedback] = useClearFeedbackMutation()
	const [removeFeedback, { isLoading: isDeleting, originalArgs }] = useRemoveFeedbackMutation()
	const handleClear = async () => {
		try {
			await clearFeedback()
			refetch()
		} catch (error) {
			console.log(error)
		}
	}
	const handleRemove = async (id: string) => {
		try {
			await removeFeedback(id)
			refetch()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<FeedbackList
				feedback={feedback}
				onClear={handleClear}
				isFetching={isFetching}
				isDeleting={isDeleting}
				onRemove={handleRemove}
				deletedItemId={originalArgs}
			/>
		</>
	)
}
