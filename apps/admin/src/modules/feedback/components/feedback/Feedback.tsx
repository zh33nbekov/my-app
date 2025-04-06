'use client'

import { useState } from 'react'
import {
	FeedbackList,
	useClearFeedbackMutation,
	useGetFeedbackQuery,
	useRemoveFeedbackMutation,
} from '../../index'

export const Feedback = () => {
	const [page, setPage] = useState(1)
	const { data: feedback, refetch, isLoading: isFetching } = useGetFeedbackQuery(page)
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
			const { info } = await removeFeedback(id).unwrap()
			const { showSuccessToast } = await import('@packages/shared')
			showSuccessToast(info)
			refetch()
		} catch (error) {
			console.log(error)
		}
	}
	const nextPage = () =>
		setPage((prev) => {
			if (feedback && prev < feedback.totalPages) {
				return prev + 1
			}
			return prev
		})
	const prevPage = () => setPage((prev) => Math.max(prev - 1, 1))
	const isPrevBtnDisabled = page === 1
	const isNextBtnDisabled = page === feedback?.totalPages

	return (
		<FeedbackList
			currPage={page}
			nextPage={nextPage}
			prevPage={prevPage}
			onClear={handleClear}
			isFetching={isFetching}
			isDeleting={isDeleting}
			onRemove={handleRemove}
			feedback={feedback?.data}
			deletedItemId={originalArgs}
			isPrevBtnDisabled={isPrevBtnDisabled}
			isNextBtnDisabled={isNextBtnDisabled}
		/>
	)
}
