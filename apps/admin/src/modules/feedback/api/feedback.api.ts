import { baseApi } from '@/store/api'
import { IGetFeedbackRes } from '../types/feedback.type'

const feedbackApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getFeedback: builder.query<IGetFeedbackRes, number>({
			query: (page) => `feedback?page=${page}&limit=10`,
		}),
		clearFeedback: builder.mutation<void, void>({
			query: () => ({
				method: 'DELETE',
				url: 'feedback',
			}),
		}),
		removeFeedback: builder.mutation<{ info: string }, string>({
			query: (id) => ({
				method: 'DELETE',
				url: `feedback/${id}`,
			}),
		}),
	}),
})

export const { useGetFeedbackQuery, useClearFeedbackMutation, useRemoveFeedbackMutation } =
	feedbackApi
