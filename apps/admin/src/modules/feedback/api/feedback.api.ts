import { baseApi } from '@/store/api'
import { IFeedback } from '../types/feedback.type'

const feedbackApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getFeedback: builder.query<IFeedback[], void>({
			query: () => 'feedback',
		}),
	}),
})

// const feedbackApi = baseApi.injectEndpoints({
// 	endpoints: (builder) => ({
// 		login: builder.mutation<IFeedbackRequest, IFeedbackResponse>({
// 			query: (data) => ({
// 				body: data,
// 				url: 'feedback',
// 				method: 'POST',
// 				credentials: 'include',
// 			}),
// 		}),
// 	}),
// })

export const { useGetFeedbackQuery } = feedbackApi
