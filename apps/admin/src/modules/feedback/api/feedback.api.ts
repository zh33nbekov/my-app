import { baseApi } from '@/store/api'
import { IFeedback } from '../types/feedback.type'

const feedbackApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getFeedback: builder.query<IFeedback[], void>({
			query: () => 'feedback',
		}),
		clearFeedback: builder.mutation<void, void>({
			query: () => ({
				method: 'DELETE',
				url: 'feedback',
			}),
		}),
		removeFeedback: builder.mutation<void, string>({
			query: (id) => ({
				method: 'DELETE',
				url: `feedback/${id}`,
			}),
		}),
	}),
})

export const { useGetFeedbackQuery, useClearFeedbackMutation, useRemoveFeedbackMutation } =
	feedbackApi
